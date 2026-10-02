const input=document.querySelector("input");
const button=document.querySelector("button");
const list=document.querySelector("ul");
button.addEventListener("click",function() {
let tasktext=input.value;
const li=document.createElement("li");
li.textContent= tasktext;
li.addEventListener("click",function(){
   li.remove(); 
});
list.append(li);
input.value="";
});