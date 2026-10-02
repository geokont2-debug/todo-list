const input=document.querySelector("input");
const button=document.querySelector("button");
const list=document.querySelector("ul");
button.addEventListener("click",function() {
let tasktext=input.value;
const li=document.createElement("li");
const deleteButton= document.createElement("button");
deleteButton.textContent="delete";
deleteButton.addEventListener("click",function() {
li.remove();
});
li.textContent= tasktext;
li.append(deleteButton);
list.append(li);
input.value="";
});