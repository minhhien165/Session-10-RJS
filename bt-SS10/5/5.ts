class Department{
    public readonly id5:number;
    private name5:string
    private employee5:string[];

    constructor(id:number, name:string, employee:string[]){
        this.id5 = id;
        this.name5 = name;
        this.employee5 = employee
    }

    describle():void{
        console.log(this.id5);
        console.log(this.name5);
    }
}

let department1 = new Department(1,"nhân sự", ["hiển", "cường", "dũng"]);

department1.describle()