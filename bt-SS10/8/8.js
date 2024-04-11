"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(newWidth) {
        this.width = newWidth;
    }
    getHeight() {
        return this.height;
    }
    setHeight(newHeight) {
        this.height = newHeight;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
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
