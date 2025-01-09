var myPragraph = document.getElementById("pragraph")
const  mo =document.getElementById("mo");
var size = 16;
const myBody = document.body;
function darkMode() {
   myBody.style.background = "none";
   myBody.style.backgroundColor = "black";
   
}
function whiteMode() {
   myBody.style.background = "none";
   myBody.style.backgroundColor = "white";
   
}

function plus(){
   size++;
   myPragraph.style.fontSize = size + "px";
}
function misi(){
   size--;
   myPragraph.style.fontSize = size + "px";
}



 mo.addEventListener("click",function(){
    mo.innerText = "لقد خدعتك";
 })

 mo.addEventListener("mouseout",function(){
    mo.innerText = "مفاجة";
 })

  