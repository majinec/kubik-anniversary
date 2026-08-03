console.log("Májinka & Kubík Anniversary Edition 🎮❤️");



const cursor = document.querySelector(".custom-cursor");


document.addEventListener("mousemove", (e)=>{


cursor.style.left = e.clientX + "px";

cursor.style.top = e.clientY + "px";


});





const startButton =
document.getElementById("startButton");


const continueButton =
document.getElementById("continueButton");



const startScene =
document.getElementById("startScene");


const saveScene =
document.getElementById("saveScene");





startButton.addEventListener("click", ()=>{


console.log("Loading save data...");


startScene.classList.remove("active");


setTimeout(()=>{


saveScene.classList.add("active");


},1000);



});





continueButton.addEventListener("click", ()=>{


console.log("Continue selected 🎮");


});
