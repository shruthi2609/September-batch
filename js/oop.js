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
function Product1(p,pr,d){
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


