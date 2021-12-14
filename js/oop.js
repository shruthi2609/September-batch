/*class Product {
  constructor(p,pr,d){
      this.pname=p;
      this.price=pr;
      this.delivery=d;
  }
  updateProductName(newPrName){
    this.pname=newPrName
  }
  displayProductDetails(){
    console.log(this.pname)
    console.log(this.price)
    console.log(this.delivery)
  }
}

let oven=new Product("philips",12000,true)
let tv=new Product("sony",45000,false)
console.log(oven)*/
/*function Product1(p,pr,d){
this.pname=p;
this.price=pr;
this.delivery=d;
}
Product1.prototype.displayProductDetails=function(){
  console.log(this.pname)
  console.log(this.price)
  console.log(this.delivery)
}
let oven1=new Product1("philips",12000,true)
console.log(oven1)
class Student{
  //data members - name regno cgpa
  //member methods
  constructor(f,r,c)
  {
  this.fname=f
  this.regno=r
  this.cgpa=c
  }
  displayStudentDetails(){
   console.log(this.fname)
   console.log(this.regno)
   console.log(this.cgpa)
  }
  updateStudentName(updatedName){
    this.fname=updatedName

  }
  }
  let stu1= new Student("john",2345,9.0)
  let stu2= new Student("george",6778,8.0)
  stu1.displayStudentName("Johhn")
  stu1.updateStudentDetails()*/
/*class Employee{
  
  constructor(f,l,des,sal){
    this.fname=f;
    this.lname=l;
    this.designation=des;
    this.salary = sal;
  }
  getEmployeeDetails(){
    console.log(this.fname)
  }
  setEmployeeName(updatedName){
    this.fname=updatedName
  }
}*/
function Employee(f,l,des,sal){
    this.fname=f;
    this.lname=l;
    this.designation=des;
    this.salary = sal;
    
}
Employee.prototype.getEmployeeDetails=function(){
  console.log(this.fname)
}
Employee.prototype.setEmployeeName=function(updatedName){
  this.fname=updatedName
}
let emp1=new Employee("john","Mckinsey","SE","45000")
console.log(emp1.fname)

emp1.setEmployeeName("jock")

emp1.getEmployeeDetails()







 
  
  
  


