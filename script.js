console.log("Májinka & Kubík Anniversary Edition 🎮❤️");


// CURSOR

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});




// BUTTONS

const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");
const backButton = document.getElementById("backButton");
const bootBackButton = document.getElementById("bootBackButton");



// SCENES

const startScene = document.getElementById("startScene");
const saveScene = document.getElementById("saveScene");
const bootScene = document.getElementById("bootScene");
const gtaScene = document.getElementById("gtaScene");



// VIDEO

const gtaVideo = document.getElementById("gtaVideo");





// START → SAVE

startButton.addEventListener("click", ()=>{

    startScene.classList.remove("active");


    setTimeout(()=>{

        saveScene.classList.add("active");

    },800);

});






// SAVE → START

backButton.addEventListener("click", ()=>{

    saveScene.classList.remove("active");


    setTimeout(()=>{

        startScene.classList.add("active");

    },500);

});







// SAVE → PS5

continueButton.addEventListener("click", ()=>{


    console.log("Starting PS5");


    saveScene.classList.remove("active");


    setTimeout(()=>{


        bootScene.classList.add("active");


        startBootSequence();


    },800);



});








// PS5 LOADING

function startBootSequence(){


    console.log("Boot started");


    const progress = document.getElementById("bootProgress");


    progress.addEventListener("animationend", ()=>{


        console.log("Progress finished");


        launchGTA();


    });



}








// GTA

function launchGTA(){


    console.log("Launching GTA");


    bootScene.classList.remove("active");


    setTimeout(()=>{


        gtaScene.classList.add("active");


        gtaVideo.currentTime = 0;


        gtaVideo.play();


    },1000);



}







// BACK BUTTON PS5

bootBackButton.addEventListener("click", ()=>{


    bootScene.classList.remove("active");


    saveScene.classList.add("active");


});
