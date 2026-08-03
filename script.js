console.log("Májinka & Kubík Anniversary Edition 🎮❤️");


// =========================
// CURSOR
// =========================

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});




// =========================
// BUTTONS
// =========================

const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");
const backButton = document.getElementById("backButton");
const bootBackButton = document.getElementById("bootBackButton");
const missionStartButton = document.getElementById("missionStartButton");




// =========================
// SCENES
// =========================

const startScene = document.getElementById("startScene");
const saveScene = document.getElementById("saveScene");
const bootScene = document.getElementById("bootScene");

const gtaLoadingScene = document.getElementById("gtaLoadingScene");
const gtaVideoScene = document.getElementById("gtaVideoScene");

const missionScene = document.getElementById("missionScene");
const rdrScene = document.getElementById("rdrScene");




// =========================
// VIDEO
// =========================

const gtaVideo = document.getElementById("gtaVideo");




// =========================
// START → SAVE
// =========================

startButton.addEventListener("click", ()=>{

    console.log("Opening save file...");

    startScene.classList.remove("active");

    setTimeout(()=>{

        saveScene.classList.add("active");

    },800);

});





// =========================
// BACK SAVE
// =========================

backButton.addEventListener("click", ()=>{


    saveScene.classList.remove("active");


    setTimeout(()=>{

        startScene.classList.add("active");

    },500);


});






// =========================
// SAVE → PS5
// =========================


continueButton.addEventListener("click", ()=>{


    console.log("Starting PS5 Boot...");


    saveScene.classList.remove("active");


    setTimeout(()=>{


        bootScene.classList.add("active");


        startBoot();


    },800);


});






// =========================
// PS5 BOOT
// =========================


function startBoot(){


console.log("PS5 BOOT ACTIVE");


let counter = 0;


let timer = setInterval(()=>{


counter++;

console.log("BOOT TIMER:", counter);



if(counter >= 15){


clearInterval(timer);


console.log("PS5 BOOT FINISHED");


bootScene.classList.remove("active");


setTimeout(()=>{


startGTALoading();


},1000);



}


},1000);



}







// =========================
// GTA LAMAR SCREEN
// =========================


function startGTALoading(){


console.log("GTA LAMAR SCREEN");



gtaLoadingScene.classList.add("active");



let timer = setTimeout(()=>{


gtaLoadingScene.classList.remove("active");


startGTAvideo();



},15000);



}








// =========================
// GTA VIDEO
// =========================


function startGTAvideo(){


console.log("Starting GTA Video");



gtaVideoScene.classList.add("active");



gtaVideo.currentTime = 0;



gtaVideo.muted = false;
gtaVideo.volume = 1;

gtaVideo.play()
.then(()=>{

console.log("GTA VIDEO + SOUND PLAYING 🎵");

})
.catch(error=>{

console.log("VIDEO SOUND BLOCKED:", error);

});





gtaVideo.onended = ()=>{


console.log("Video finished");


gtaVideoScene.classList.remove("active");



setTimeout(()=>{


missionScene.classList.add("active");


},1000);



};



}







// =========================
// MISSION START → RDR2
// =========================


missionStartButton.addEventListener("click", ()=>{


console.log("Entering RDR2");



missionScene.classList.remove("active");



setTimeout(()=>{


rdrScene.classList.add("active");


},1000);



});







// =========================
// BACK FROM PS5
// =========================


bootBackButton.addEventListener("click", ()=>{


bootScene.classList.remove("active");


setTimeout(()=>{


saveScene.classList.add("active");


},500);



});
