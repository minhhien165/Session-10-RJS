"use strict";
class Department {
    constructor(id, name, employee) {
        this.id5 = id;
        this.name5 = name;
        this.employee5 = employee;
    }
    describle() {
        console.log(this.id5);
        console.log(this.name5);
    }
}
let department1 = new Department(1, "nhân sự", ["hiển", "cường", "dũng"]);
department1.describle();
