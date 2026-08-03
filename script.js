console.log("Májinka & Kubík Anniversary Edition 🎮❤️");


// =========================
// CURSOR
// =========================


const cursor = document.querySelector(".custom-cursor");


document.addEventListener("mousemove", (e)=>{

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

const chapterScene = document.getElementById("chapterScene");







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
// SAVE → START
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


startBootSequence();



},800);



});









// =========================
// PS5 BOOT
// =========================


function startBootSequence(){


console.log("PS5 BOOT ACTIVE");



setTimeout(()=>{


console.log("PS5 BOOT FINISHED");


launchGTA();


},15000);



}










// =========================
// GTA LOADING SCREEN
// =========================


function launchGTA(){


console.log("Launching GTA Loading Screen");



bootScene.classList.remove("active");



setTimeout(()=>{


gtaLoadingScene.classList.add("active");


},1000);



}









// =========================
// MISSION START BUTTON
// =========================


missionStartButton.addEventListener("click", ()=>{


console.log("Starting GTA Video");



gtaLoadingScene.classList.remove("active");



setTimeout(()=>{


startGTAVideo();


},800);



});









// =========================
// GTA VIDEO
// =========================


function startGTAVideo(){


console.log("GTA VIDEO START");



gtaVideoScene.classList.add("active");



gtaVideo.currentTime = 0;


// povolí zvuk po kliknutí

gtaVideo.muted = false;

gtaVideo.volume = 1;



gtaVideo.play()
.then(()=>{


console.log("VIDEO PLAYING 🔊");


})
.catch((error)=>{


console.log("VIDEO ERROR:", error);


});



}









// =========================
// VIDEO END → CHAPTER SCREEN
// =========================


gtaVideo.addEventListener("ended", ()=>{


console.log("Video finished");



gtaVideoScene.classList.remove("active");



setTimeout(()=>{


chapterScene.classList.add("active");


console.log("Entering RDR2 Chapters 🤠");



},1200);



});









// =========================
// BACK BUTTON PS5
// =========================


bootBackButton.addEventListener("click", ()=>{


bootScene.classList.remove("active");


saveScene.classList.add("active");


});





console.log("Game system loaded 🎮");
