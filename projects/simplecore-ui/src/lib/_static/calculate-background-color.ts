export class CalculateBackgroundColor {
  /** Note that this is a fairly intensive recursive function */
  public static findElementBackground(element: HTMLElement): string {
    // Base case: Check if this element is a body element
    if (element === null || element === undefined) {
      return null;
    }
    const currentBackgroundColor = getComputedStyle(element).backgroundColor;

    // Is not default background color
    if (currentBackgroundColor !== 'rgba(0, 0, 0, 0)') {
      // This is this closest parent's background
      return currentBackgroundColor;
    }

    // Recursively find background color with parent element
    return CalculateBackgroundColor.findElementBackground(element.parentElement);
  }
}
