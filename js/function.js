/*let arr=["john",20909,9.0,"react"]
//foreach
/*arr.forEach(
    (element,index)=>{
        console.log(element)
        console.log(index)
    }
)*/
// push pop shift unshift
/*arr.push("node js",5,"mongodb")
arr.unshift("CSE","clgname")
for(let i=0;i<=5;i++){
    arr.shift()
}
console.log(arr)*/
//removing elements 
/*arr.splice(2,3,"one","two","three","four")*/
/*console.log(arr.unshift("CSE","clgname"))
console.log(arr.slice(0,4))
console.log(arr.slice(-6,-1))
//arr.unshift("CSE","clgname")
//console.log(arr)
//arr.slice(2,5)
//console.log(arr)
/*
let greet=(fname)=>{
console.log(fname)
}
console.log(greet("john"))*/
/*let newArr=arr.concat(["new","item"])
console.log(newArr)
console.log(arr)*/
//indexOf lastIndexOf includes
let arr=["john",20909,9.0,20909,"react",20909]
console.log(arr.includes("john"))
/*function findIndex(arr,val){
arr.forEach(
    (element,index)=>{
        if(element===val){
            console.log(index)
        }
    })
}
findIndex(arr,20909)
function findFirstIndex(arr,val){
   for(let i=0;i<arr.length;i++)
   {
    if(arr[i]===val){
        continue
    }
    else{
        console.log(i)//0 2 4
    }
    
   }
    }
findFirstIndex(arr,20909)
function findLastIndex(arr,val){
    result=null
    arr.forEach(
        (element,index)=>{
            if(element===val){
                result=index
            }
        })
    return result
    }
console.log(findLastIndex(arr,20909))


//find 
const result=student.find((item)=>item.company==="tcs"
)
console.log(result.fname,result.reg)*/
//filter
/*let student=[
        {reg:123,fname:"peter",company:"tcs"},
        {reg:122,fname:"john",company:"cts"},
        {reg:121,fname:"george",company:"tcs"},
]
const result=student.filter((item)=>item.company==="tcs"
)
result.forEach(
    (element)=>{
       console.log(element.fname,element.reg) 
    })
result.map((item)=>console.log(item.fname,item.reg))*/







