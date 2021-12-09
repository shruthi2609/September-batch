function addItem(){
let item=document.getElementById("iptask")
let ul=document.getElementById("unorderedlist")
    if(item.value!=""){
        let li=document.createElement("li")
        let textNode=document.createTextNode(item.value)
        li.appendChild(textNode)
        ul.appendChild(li)
        item.value=""
       }
       else{
           alert("please enter a task")
       }
    }


