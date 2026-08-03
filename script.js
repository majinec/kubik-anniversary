console.log("Májinka & Kubík Anniversary Edition 🎮❤️");


// CUSTOM CURSOR

const cursor = document.querySelector(".custom-cursor");


document.addEventListener("mousemove", (e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});





// BUTTONS

const startButton = 
document.getElementById("startButton");


const continueButton = 
document.getElementById("continueButton");


const backButton = 
document.getElementById("backButton");


const bootBackButton = 
document.getElementById("bootBackButton");





// SCENES

const startScene = 
document.getElementById("startScene");


const saveScene = 
document.getElementById("saveScene");


const bootScene = 
document.getElementById("bootScene");





// START MENU → SAVE SLOT

startButton.addEventListener("click", ()=>{


    console.log("Loading save data...");


    startScene.classList.remove("active");


    setTimeout(()=>{


        saveScene.classList.add("active");


    },800);


});





// SAVE SLOT → START

backButton.addEventListener("click", ()=>{


    saveScene.classList.remove("active");


    setTimeout(()=>{


        startScene.classList.add("active");


    },500);


});





// SAVE SLOT → PS5 BOOT

continueButton.addEventListener("click", ()=>{


    console.log("Starting PS5 Boot...");


    saveScene.classList.remove("active");


    setTimeout(()=>{


        bootScene.classList.add("active");


        console.log("PS5 BOOT ACTIVE");


    },800);



});





// PS5 BOOT → SAVE SLOT

bootBackButton.addEventListener("click", ()=>{


    bootScene.classList.remove("active");


    setTimeout(()=>{


        saveScene.classList.add("active");


    },500);


});
