class Rectangle {
    private width: number;
    private height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    getWidth(): number {
      return this.width;
    }
  
    setWidth(newWidth: number): void {
      this.width = newWidth;
    }
  
    getHeight(): number {
      return this.height;
    }
  
    setHeight(newHeight: number): void {
      this.height = newHeight;
    }
  
    getArea(): number {
      return this.width * this.height;
    }
  
    getPerimeter(): number {
      return 2 * (this.width + this.height);
    }
}
const rectangle = new Rectangle(5, 7);
console.log("Width:", rectangle.getWidth());
console.log("Height:", rectangle.getHeight());
console.log("Perimeter:", rectangle.getPerimeter());
console.log("Area:", rectangle.getArea());
rectangle.setWidth(8);
rectangle.setHeight(10);
console.log("Updated Width:", rectangle.getWidth());
console.log("Updated Height:", rectangle.getHeight());
console.log("Updated Perimeter:", rectangle.getPerimeter());
console.log("Updated Area:", rectangle.getArea());