"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(newRadius) {
        this.radius = newRadius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getCircumference() {
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
