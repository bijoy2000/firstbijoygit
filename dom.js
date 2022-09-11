
//class -----1

//getElementById
let div1 = document.getElementById("div1");
div1.innerHTML = "abcdefghijklmnopqrstuvwxyz";

//getElementsByClassName
let class1 = document.getElementsByClassName("class1")[2];
class1.innerHTML = "hi class";

//getElementsByName
let heading5 = document.getElementsByName("heading5")[0];
heading5.innerHTML = "heading 5";

//getElementsByTagName
let h1 = document.getElementsByTagName("h1")[1];
h1.innerHTML = "Tag Text Chance";

//let h3 = document.querySelector(h3);

// class-----2

function clickMe(){
    let time = document.getElementById("time").innerHTML = Date();
}

//fragment

let menu = document.querySelector("#menu");
let lang = ['html' , 'css' , 'javascript' , 'bootstrap' , 'jquery'];

let fragment = document.createDocumentFragment();

lang.forEach((language) => {
    let li = document.createElement("li");
    li.textContent = language;
    fragment.appendChild(li);
})
 menu.appendChild(fragment);

 //insert before after

let menubefore = document.querySelector("#menubefore");
let li = document.createElement("li");
li.textContent = "Home";
menubefore.insertBefore(li,menubefore.firstElementChild);

//java script style

let lorem = document.querySelector("#lorem");
lorem.style.fontSize = "10px";
lorem.style.backgroundColor = "red";
lorem.style.width = "100px";
lorem.style.height = "100px";
lorem.style.padding = "20px";

