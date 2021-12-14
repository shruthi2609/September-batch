function addNewHeading(){
    //createElement() createTextNode() appendChild()
    let h1=document.createElement("h1")
    let textNode1=document.createTextNode("new heading 1")
    h1.style.backgroundColor="red"
    let h2=document.createElement("h2")
    let textNode2=document.createTextNode("new heading 2")
    h1.appendChild(textNode1)
    h2.appendChild(textNode2)
   document.body.appendChild(h1)
   document.body.appendChild(h2)
    target.appendChild(data)
    console.log(h1)
}
//<a href=""> click here </a>
function generateLink(){
    let a=document.createElement("a")
    let textNode=document.createTextNode("click here")
    a.href="https://www.gmail.com"
    a.target="_blank"
    a.appendChild(textNode)
    document.body.appendChild(a)
}
function generateImage(){
    let img=document.createElement("img")
    img.src="Sample Pictures/Lighthouse.jpg"
    img.width="250"
    img.height="350"
    console.log(img)
    document.body.appendChild(img)
}
function deleteElement(){
    let parent=document.getElementById("empty")
    let child=document.getElementById("head1")
    parent.removeChild(child)
}