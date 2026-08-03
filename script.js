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


const backButton =
document.getElementById("backButton");



const startScene =
document.getElementById("startScene");


const saveScene =
document.getElementById("saveScene");





startButton.addEventListener("click", ()=>{


    console.log("Loading save data...");


    startScene.classList.remove("active");


    setTimeout(()=>{


        saveScene.classList.add("active");


    },800);


});





backButton.addEventListener("click", ()=>{


    saveScene.classList.remove("active");


    setTimeout(()=>{


        startScene.classList.add("active");


    },500);


});





continueButton.addEventListener("click", ()=>{


    console.log("Continue selected 🎮");


});

// PS5 BOOT SYSTEM


const bootScene = document.getElementById("bootScene");


const bootBackButton = document.getElementById("bootBackButton");





continueButton.addEventListener("click", ()=>{


    console.log("Starting PS5 Boot...");


    saveScene.classList.remove("active");


    setTimeout(()=>{


        bootScene.classList.add("active");


    },800);



});





bootBackButton.addEventListener("click", ()=>{


    bootScene.classList.remove("active");


    setTimeout(()=>{


        saveScene.classList.add("active");


    },500);


});
