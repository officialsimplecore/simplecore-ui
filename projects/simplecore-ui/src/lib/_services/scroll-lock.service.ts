/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */

/**
 * @license
 * Copyright 2020 willmcpo, MIT.
 *
 * Source code adapted from https://github.com/willmcpo/body-scroll-lock/blob/fe6bfea3a134f337e77e62ae380cdf29eac7216b/lib/bodyScrollLock.es6.js.
 * Originally published under an MIT license. Adapted by January 17, 2021.
 * Reason: To ensure that this code works with Angular Server Side rendering, additional checks were added when porting this code as an Angular Service.
 */

import {Inject, Injectable, OnInit, PLATFORM_ID} from "@angular/core";
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})

export class ScrollLockService implements OnInit {
  private hasPassiveEvents = false;

  private get passiveTestOptions(): boolean {
    this.hasPassiveEvents = true;
    return undefined;
  };

  constructor(@Inject(PLATFORM_ID) private readonly platformId: any) {
  }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('testPassive', null, this.passiveTestOptions);
      window.removeEventListener('testPassive', null, this.passiveTestOptions);
    }
    this.isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);
}

  private isIosDevice: boolean = false;


  private locks = [];
  private documentListenerAdded = false;
  private initialClientY = -1;
  private previousBodyOverflowSetting;
  private previousBodyPaddingRight;

  // returns true if `el` should be allowed to receive touchmove events.
  public allowTouchMove = el => this.locks.some(lock => {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }

    return false;
  });

  private preventDefault = rawEvent => {
    const e = rawEvent || window.event;

    // For the case whereby consumers adds a touchmove event listener to document.
    // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
    // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
    // the touchmove event on document will break.
    if (this.allowTouchMove(e.target)) {
      return true;
    }

    // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
    if (e.touches.length > 1) return true;

    if (e.preventDefault) e.preventDefault();

    return false;
  };

  private setOverflowHidden = options => {
    // If previousBodyPaddingRight is already set, don't set it again.
    if (this.previousBodyPaddingRight === undefined) {
      const reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
      const scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

      if (reserveScrollBarGap && scrollBarGap > 0) {
        this.previousBodyPaddingRight = document.body.style.paddingRight;
        document.body.style.paddingRight = `${scrollBarGap}px`;
      }
    }

    // If previousBodyOverflowSetting is already set, don't set it again.
    if (this.previousBodyOverflowSetting === undefined) {
      this.previousBodyOverflowSetting = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
  };

  private restoreOverflowSetting = () => {
    if (this.previousBodyPaddingRight !== undefined) {
      document.body.style.paddingRight = this.previousBodyPaddingRight;

      // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
      // can be set again.
      this.previousBodyPaddingRight = undefined;
    }

    if (this.previousBodyOverflowSetting !== undefined) {
      document.body.style.overflow = this.previousBodyOverflowSetting;

      // Restore previousBodyOverflowSetting to undefined
      // so setOverflowHidden knows it can be set again.
      this.previousBodyOverflowSetting = undefined;
    }
  };

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
  private isTargetElementTotallyScrolled = targetElement => targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;

  private handleScroll = (event, targetElement) => {
    const clientY = event.targetTouches[0].clientY - this.initialClientY;

    if (this.allowTouchMove(event.target)) {
      return false;
    }

    if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
      // element is at the top of its scroll.
      return this.preventDefault(event);
    }

    if (this.isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
      // element is at the bottom of its scroll.
      return this.preventDefault(event);
    }

    event.stopPropagation();
    return true;
  };

  public disableBodyScroll = (targetElement, options?) => {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    // targetElement must be provided
    if (!targetElement) {
      // eslint-disable-next-line no-console
      console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
      return;
    }

    // disableBodyScroll must not have been called on this targetElement before
    if (this.locks.some(lock => lock.targetElement === targetElement)) {
      return;
    }

    const lock = {
      targetElement,
      options: options || {}
    };

    this.locks = [...this.locks, lock];

    if (this.isIosDevice) {
      targetElement.ontouchstart = event => {
        if (event.targetTouches.length === 1) {
          // detect single touch.
          this.initialClientY = event.targetTouches[0].clientY;
        }
      };
      targetElement.ontouchmove = event => {
        if (event.targetTouches.length === 1) {
          // detect single touch.
          this.handleScroll(event, targetElement);
        }
      };

      if (!this.documentListenerAdded) {
        document.addEventListener('touchmove', this.preventDefault, this.hasPassiveEvents ? false : undefined);
        this.documentListenerAdded = true;
      }
    } else {
      this.setOverflowHidden(options);
    }
  };

  public clearAllBodyScrollLocks = () => {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    if (this.isIosDevice) {
      // Clear all locks ontouchstart/ontouchmove handlers, and the references.
      this.locks.forEach(lock => {
        lock.targetElement.ontouchstart = null;
        lock.targetElement.ontouchmove = null;
      });

      if (this.documentListenerAdded) {
        document.removeEventListener('touchmove', this.preventDefault, this.hasPassiveEvents ? false : undefined);
        this.documentListenerAdded = false;
      }

      // Reset initial clientY.
      this.initialClientY = -1;
    } else {
      this.restoreOverflowSetting();
    }

    this.locks = [];
  };

  public enableBodyScroll = targetElement => {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    if (!targetElement) {
      // eslint-disable-next-line no-console
      console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
      return;
    }

    this.locks = this.locks.filter(lock => lock.targetElement !== targetElement);

    if (this.isIosDevice) {
      targetElement.ontouchstart = null;
      targetElement.ontouchmove = null;

      if (this.documentListenerAdded && this.locks.length === 0) {
        document.removeEventListener('touchmove', this.preventDefault, this.hasPassiveEvents ? false : undefined);
        this.documentListenerAdded = false;
      }
    } else if (!this.locks.length) {
      this.restoreOverflowSetting();
    }
  };
}
