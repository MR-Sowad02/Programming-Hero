class Student{
     constructor(sId, sName){
          this.id = sId;
          this.name = sName;
          this.school = "School";
     }
}

const student1 = new Student(25, "Gutipoka");
const student2 = new Student(23, "Projapoti");
console.log(student1.name, student2.name);