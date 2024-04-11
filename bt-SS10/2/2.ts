class Student {
    id2: number;
    age2: number;
    email2:string;
    constructor(id:number,age:number,email: string){
        this.id2 = id;
        this.age2 = age;
        this.email2 = email;
    }
}
let students: Student[] = [];
let student1 =  new Student(0,18, "student1@gmail.com");
students.push(student1);
let student2 =  new Student(1,19, "student2@gmail.com");
students.push(student2);
let student3 =  new Student(2,20, "student3@gmail.com");
students.push(student3);

students.forEach((student)=>{
    console.log(`ID: ${student.id2}, Age: ${student.age2}, Email: ${student.email2}`);
})