class Employee {
    public name3: string;
    protected company3: string;
    private phone3: number;
    constructor(name: string, company: string, phone: number) {
        this.name3 = name;
        this.company3 = company;
        this.phone3 = phone;
    }
    printInfo(): void {
        console.log("name", this.name3);
        console.log("company", this.company3);
        console.log("phone", this.phone3);
    }
}
let employee = new Employee("A", "ABC",1234);
employee.printInfo()