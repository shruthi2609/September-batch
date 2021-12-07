/*let users=[
    {
    fname:'santhosh',
    age:23,
    intr:"react"
},
    {
    fname:'san',
    age:24,
    intr:['node','js','angular']
    },
    {
    fname:'derrick',
    age:25,
    intr:['c','python','java']
    }
]
let tech=prompt("enter the technology ")//react

for (i=0;i<users.length; i++) {
    let data=users[i].intr;//["react","js"]
    let fname=users[i].fname;//santhosh
  for (j=0;j<data.length;j++){
      if(tech===data[j]){
          alert(fname)
      }
  }
  
}*/
let obj={
    fname:"john",
    reg:1234,
    display:function displayDetails(){
        console.log(obj.fname)
    }
}
