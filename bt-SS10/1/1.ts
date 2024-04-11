class Vehicle {
    name1: string;
    year1: number;
    company1: string;
  
    constructor(name: string, year: number, company: string) {
      this.name1 = name;
      this.year1 = year;
      this.company1 = company;
    }
}
let vehicle1 = new Vehicle("Ô tô", 2010, "123");
let vehicle2 = new Vehicle("Xe máy", 2016, "456");

console.log("Vehicle 1:");
console.log("Name:", vehicle1.name1);
console.log("Year:", vehicle1.year1);
console.log("Company:", vehicle1.company1);

console.log("Vehicle 2:");
console.log("Name:", vehicle2.name1);
console.log("Year:", vehicle2.year1);
console.log("Company:", vehicle2.company1);
