import {Renderer2} from "@angular/core";

export class RendererExtensions {
  public static addClassToChildren(renderer: Renderer2, element: HTMLElement, className: string): void {
    const stackChildren = element.children
    for (let i = 0; i < stackChildren.length; i++) {
      renderer.addClass(stackChildren[i], className);
    }
  }

  public static addStyleToChildren(renderer: Renderer2, element: HTMLElement, styleName: string, styleValue: string, indexCondition?: (i: number, a: ArrayLike<any>) => boolean): void {
    if (styleName == "") {
      return;
    }
    const stackChildren = element.children
    let indexToAvoid: number[] = [];

    if (indexCondition !== null && indexCondition !== undefined) {
      stackChildren.length;
      for (let i = 0; i < stackChildren.length; i++) {
        if (indexCondition(i, stackChildren) == false) {
          indexToAvoid.push(i);
        }
      }
    }

    for (let i = 0; i < stackChildren.length; i++) {
      if (!indexToAvoid.includes(i)) {
        renderer.setStyle(stackChildren[i], styleName, styleValue);
      }
    }
  }
}
