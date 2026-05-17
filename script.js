/* Theme Toggle */

const toggle=document.getElementById("themeToggle");

toggle.onclick=()=>{
document.body.classList.toggle("light");
};


/* Scroll Reveal */

function reveal(){

document.querySelectorAll(".reveal").forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top < window.innerHeight-100){

el.classList.add("active");

}

});

}

window.addEventListener("scroll", reveal);



/* Typing Animation */

const words=[
"Cloud Engineer",
"Amazon Web Applications Builder",
"DevOps Enthusiast",
"Tech Problem Solver"
];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current=words[i];

document.getElementById("typing").textContent=current.substring(0,j);

if(!isDeleting && j < current.length){
j++;
setTimeout(type,80);
}

else if(isDeleting && j>0){
j--;
setTimeout(type,40);
}

else{

isDeleting=!isDeleting;

if(!isDeleting){
i=(i+1)%words.length;
}

setTimeout(type,900);
}

}

type();