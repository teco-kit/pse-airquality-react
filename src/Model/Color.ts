export class Color {
  private r: number;
  private g: number;
  private b: number;

  constructor(r: number, g: number, b: number) {
    //Creates a color from RGB values
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
      throw new TypeError("r, g, b have to be an integer in [0, 255]");
    }
    this.r = Math.floor(r);
    this.g = Math.floor(g);
    this.b = Math.floor(b);
  }

  static getColorFromHex(hex: string): Color {
    var regexp = /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/g;
    var match = regexp.exec(hex);
    if (!match) {
      //Keine Hex-Farbe
      throw new TypeError("hex has to be in format #RRGGBB");
    }
    var r = parseInt(match[1], 16);
    var g = parseInt(match[2], 16);
    var b = parseInt(match[3], 16);

    return new Color(r, g, b);
  }

  getRGB(): { r: number; g: number; b: number } {
    var r = this.r;
    var g = this.g;
    var b = this.b;
    return { r: r, g: g, b: b };
  }

  getHex(): string {
    return "#" + this.toHex(this.r) + this.toHex(this.g) + this.toHex(this.b);
  }

  private toHex(n: number): string {
    if (n < 0 || n > 255) {
      return this.toHex(0); //This should never happen, only for reusing this method later.
    }
    var hex = n.toString(16).toUpperCase(); //Converts to upper-case-hex.
    if (hex.length < 2) {
      hex = "0" + hex; //Add padding if n < 16
    }
    return hex;
  }
}
