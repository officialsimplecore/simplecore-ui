export class Uuid {
  public static getUuidString(): string {
    return Uuid.generateStringId(5) + Math.floor(Math.random() * Date.now());
  }

  public static getUuidNumber(): number {
    return Math.floor(Math.random() * Date.now())
  }

  private static generateStringId(length) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
