class Circle {
    private radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    getRadius(): number {
      return this.radius;
    }
  
    setRadius(newRadius: number): void {
      this.radius = newRadius;
    }
  
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  
    getCircumference(): number {
      return 2 * Math.PI * this.radius;
    }
}
const circle = new Circle(5);
console.log("Radius:", circle.getRadius());
console.log("Circumference:", circle.getCircumference());
console.log("Area:", circle.getArea());
circle.setRadius(7);
console.log("Updated Radius:", circle.getRadius());
console.log("Updated Circumference:", circle.getCircumference());
console.log("Updated Area:", circle.getArea());