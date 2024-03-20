const notescontainer = document.querySelector('.notes-container');

const createbtn = document.querySelector('.btn');


let notes = document.querySelectorAll(".input-box");

createbtn.addEventListener('click', () => {
let inputbox = document.createElement("p")
let img = document.createElement("img");

inputbox.className = "input-box";
inputbox.setAttribute("contenteditable" , "true")

img.src = "sampah.png";


notescontainer.appendChild(inputbox).appendChild(img);


})


notescontainer.addEventListener('click', function(e){

if (e.target.tagName === "IMG"){

e.target.parentElement.style.display = "none";

}


})











