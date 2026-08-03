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

const missionScene = document.getElementById("missionScene");

const rdrScene = document.getElementById("rdrScene");







// =========================
// VIDEO
// =========================


const gtaVideo = document.getElementById("gtaVideo");






// =========================
// START → SAVE
// =========================


if(startButton){


startButton.addEventListener("click", ()=>{


    console.log("Opening save file...");


    startScene.classList.remove("active");


    setTimeout(()=>{


        saveScene.classList.add("active");


    },800);


});


}








// =========================
// SAVE → START
// =========================


if(backButton){


backButton.addEventListener("click", ()=>{


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


continueButton.addEventListener("click", ()=>{


    console.log("Starting PS5 Boot...");


    saveScene.classList.remove("active");



    setTimeout(()=>{


        bootScene.classList.add("active");


        startBoot();


    },800);



});


}








// =========================
// PS5 BOOT
// =========================


function startBoot(){


console.log("PS5 BOOT ACTIVE");



const progress = document.getElementById("bootProgress");



if(progress){


    progress.style.animation="none";


    progress.offsetHeight;


    progress.style.animation="loading 15s linear forwards";



}





setTimeout(()=>{


    console.log("Launching GTA Loading");


    bootScene.classList.remove("active");



    setTimeout(()=>{


        gtaLoadingScene.classList.add("active");


        startGTALoading();



    },800);



},15000);



}








// =========================
// GTA LAMAR LOADING
// =========================


function startGTALoading(){


console.log("GTA Loading Screen");



setTimeout(()=>{


    console.log("Starting GTA Video");


    gtaLoadingScene.classList.remove("active");



    setTimeout(()=>{


        gtaVideoScene.classList.add("active");



        if(gtaVideo){


            gtaVideo.currentTime = 0;


            gtaVideo.muted = true;

let playPromise = gtaVideo.play();


if(playPromise !== undefined){

    playPromise
    .then(()=>{

        console.log("VIDEO STARTED 🎬");

    })
    .catch(error=>{

        console.log("VIDEO BLOCKED:", error);

    });

}



        }



    },800);



},15000);



}









// =========================
// VIDEO END
// =========================


if(gtaVideo){



gtaVideo.addEventListener("ended", ()=>{


    console.log("Video finished");


    gtaVideo.pause();



    gtaVideoScene.classList.remove("active");



    setTimeout(()=>{


        missionScene.classList.add("active");



    },1000);



});



}









// =========================
// MISSION START → RDR2
// =========================


if(missionStartButton){


missionStartButton.addEventListener("click", ()=>{


console.log("Entering RDR2");


missionScene.classList.remove("active");



setTimeout(()=>{


    rdrScene.classList.add("active");


},1000);



});


}








// =========================
// BACK FROM PS5
// =========================


if(bootBackButton){


bootBackButton.addEventListener("click", ()=>{


bootScene.classList.remove("active");


setTimeout(()=>{


saveScene.classList.add("active");


},500);



});


}








// =========================
// RDR2 RESET
// =========================


function resetVideo(){


if(gtaVideo){


gtaVideo.pause();

gtaVideo.currentTime=0;


}


}


console.log("Game system loaded 🎮");
