let result= document.getElementById("heading")
var inputField = document.getElementById("inputField");

console.log(result)
let count=0
function minus(){
    count -=1
    result.textContent=count
}
let resultant= document.getElementById("heading")
console.log(result)
let countt=0
function plus(){
    countt= count+=1
    resultant.textContent=countt
}
function entry(){
    inputField.appendChild(counter)
    console.log("added")

}
let menu=document.getElementById("menu")
let btnInfo=document.getElementById("inputField")
let data=document.getElementById("btnn-link")

function info(){
    count += 1
    btnInfo.textContent = count

}
function display(){
    let countStr = count 
    menu.textContent += countStr
    btnInfo.textContent = 0
    count = 0
}
