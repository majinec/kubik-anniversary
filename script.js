console.log("Májinka & Kubík Anniversary Edition 🎮❤️");



// =========================
// CURSOR
// =========================


const cursor = document.querySelector(".custom-cursor");


document.addEventListener("mousemove", e => {

    if(cursor){

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    }

});






// =========================
// BUTTONS
// =========================


const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");

const missionStartButton = document.getElementById("missionStartButton");

const backButton = document.getElementById("backButton");
const bootBackButton = document.getElementById("bootBackButton");






// =========================
// SCENES
// =========================


const startScene = document.getElementById("startScene");

const saveScene = document.getElementById("saveScene");

const bootScene = document.getElementById("bootScene");

const gtaLoadingScene = document.getElementById("gtaLoadingScene");

const gtaVideoScene = document.getElementById("gtaVideoScene");

const missionScene = document.getElementById("missionScene");

const chapterScene = document.getElementById("chapterScene");







// =========================
// VIDEO
// =========================


const gtaVideo = document.getElementById("gtaVideo");







// =========================
// START
// =========================


if(startButton){


startButton.addEventListener("click",()=>{


    startScene.classList.remove("active");


    setTimeout(()=>{


        saveScene.classList.add("active");


    },800);



});


}








// =========================
// BACK SAVE
// =========================


if(backButton){


backButton.addEventListener("click",()=>{


    saveScene.classList.remove("active");


    setTimeout(()=>{


        startScene.classList.add("active");


    },500);



});


}








// =========================
// SAVE → PS5
// =========================


if(continueButton){


continueButton.addEventListener("click",()=>{


console.log("Starting PS5 Boot...");


saveScene.classList.remove("active");



setTimeout(()=>{


    bootScene.classList.add("active");


    startPS5();


},800);



});


}








// =========================
// PS5 BOOT
// =========================


function startPS5(){


console.log("PS5 BOOT ACTIVE");


let counter = 0;


let timer = setInterval(()=>{


counter++;


console.log("BOOT TIMER:",counter);



if(counter >= 15){


clearInterval(timer);



console.log("PS5 BOOT FINISHED");



bootScene.classList.remove("active");



setTimeout(()=>{


    gtaLoadingScene.classList.add("active");


    startGTALoading();



},1000);



}



},1000);



}









// =========================
// GTA LOADING
// =========================


function startGTALoading(){


console.log("GTA LAMAR SCREEN");



const dots = document.getElementById("loadingDots");


if(dots){


let count = 0;


setInterval(()=>{


count++;


if(count > 3){

count = 0;

}


dots.innerHTML = ".".repeat(count);



},500);



}




// automaticky po 15 sekundách ukáže mission


setTimeout(()=>{


gtaLoadingScene.classList.remove("active");


setTimeout(()=>{


missionScene.classList.add("active");


},800);



},15000);



}









// =========================
// MISSION START → VIDEO
// =========================


if(missionStartButton){



missionStartButton.addEventListener("click",()=>{


console.log("Starting GTA Video");



missionScene.classList.remove("active");



setTimeout(()=>{


gtaVideoScene.classList.add("active");


playGTAVideo();



},800);



});



}









// =========================
// GTA VIDEO
// =========================


function playGTAVideo(){


console.log("GTA VIDEO + SOUND PLAYING 🎵");



if(gtaVideo){


gtaVideo.muted = false;


gtaVideo.volume = 1;


gtaVideo.currentTime = 0;



gtaVideo.play()
.then(()=>{


console.log("Video started");


})
.catch(err=>{


console.log("Video blocked:",err);


});




gtaVideo.onended = ()=>{


console.log("Video finished");


enterRDR2();



};



}



}









// =========================
// RDR2 CHAPTER
// =========================


function enterRDR2(){


console.log("Entering RDR2");



gtaVideoScene.classList.remove("active");



setTimeout(()=>{


if(chapterScene){


chapterScene.classList.add("active");


}


},1000);



}








// =========================
// BACK PS5
// =========================


if(bootBackButton){


bootBackButton.addEventListener("click",()=>{


bootScene.classList.remove("active");


saveScene.classList.add("active");


});


}
