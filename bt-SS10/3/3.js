"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name3 = name;
        this.company3 = company;
        this.phone3 = phone;
    }
    printInfo() {
        console.log("name", this.name3);
        console.log("company", this.company3);
        console.log("phone", this.phone3);
    }
}
let employee = new Employee("A", "ABC", 1234);
employee.printInfo();
