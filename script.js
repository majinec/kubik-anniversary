console.log("Májinka & Kubík Anniversary Edition 🎮❤️");


/* ========================= */
/* ELEMENTS */
/* ========================= */


const startButton = document.getElementById("startButton");

const continueButton = document.getElementById("continueButton");

const missionStartButton = document.getElementById("missionStartButton");


const startScene = document.getElementById("startScene");

const saveScene = document.getElementById("saveScene");

const bootScene = document.getElementById("bootScene");

const gtaLoadingScene = document.getElementById("gtaLoadingScene");

const gtaVideoScene = document.getElementById("gtaVideoScene");

const chapterScene = document.getElementById("chapterScene");


const gtaVideo = document.getElementById("gtaVideo");


const loadingDots = document.getElementById("loadingDots");



/* ========================= */
/* SCENE SWITCH */
/* ========================= */


function openScene(scene){


    document.querySelectorAll(".scene").forEach(s=>{

        s.classList.remove("active");

    });


    if(scene){

        scene.classList.add("active");

    }

}




/* ========================= */
/* START */
/* ========================= */


startButton.addEventListener("click",()=>{


    console.log("Opening save file...");


    openScene(saveScene);


});






/* ========================= */
/* CONTINUE */
/* ========================= */


continueButton.addEventListener("click",()=>{


    console.log("Starting PS5 Boot...");


    openScene(bootScene);


    startBoot();


});






/* ========================= */
/* PS5 BOOT */
/* ========================= */


function startBoot(){


    console.log("PS5 BOOT ACTIVE");



    const progress = document.getElementById("bootProgress");



    if(progress){

        progress.style.animation="none";

        progress.offsetHeight;

        progress.style.animation="bootLoading 15s linear forwards";

    }



    let seconds = 0;



    const timer=setInterval(()=>{


        seconds++;


        console.log("BOOT TIMER:",seconds);



        if(seconds>=15){


            clearInterval(timer);


            console.log("PS5 BOOT FINISHED");


            launchGTA();


        }


    },1000);
/* ========================= */
/* PS5 BOOT SYSTEM */
/* ========================= */


function startBoot(){

    console.log("PS5 BOOT ACTIVE");


    let progress = document.querySelector(".loading-progress");

    let cards = document.querySelectorAll(".boot-card");

    let connection = document.querySelector(".connection");


    if(progress){

        progress.style.animation = "none";

        setTimeout(()=>{

            progress.style.animation =
            "bootLoading 15s linear forwards";

        },50);

    }



    cards.forEach((card,index)=>{

        card.style.opacity="0";


        setTimeout(()=>{

            card.style.opacity="1";
            card.style.transform="translateY(0)";


        },2000 + index*1000);


    });



    setTimeout(()=>{


        if(connection){

            connection.style.opacity="1";

        }


    },5000);





    setTimeout(()=>{


        openGtaLoading();


    },15000);



}






/* ========================= */
/* GTA LOADING SCREEN */
/* ========================= */


function openGtaLoading(){


console.log("GTA LAMAR SCREEN");


changeScene("gtaLoadingScene");



let button =
document.getElementById("missionStartButton");



if(button){


button.style.opacity="0";


button.style.pointerEvents="none";



setTimeout(()=>{


button.style.opacity="1";

button.style.pointerEvents="auto";



},7000);



}



}







/* ========================= */
/* GTA VIDEO */
/* ========================= */



function startGtaVideo(){


console.log("STARTING GTA VIDEO");



changeScene("gtaVideoScene");



let video =
document.getElementById("gtaVideo");



if(video){


video.currentTime=0;


video.muted=false;



let playPromise =
video.play();



if(playPromise){


playPromise.catch(()=>{


console.log(
"Browser blocked autoplay sound"
);


video.muted=true;


video.play();


});


}




video.onended=function(){


console.log("VIDEO FINISHED");


openChapterScreen();


};



}




}








/* ========================= */
/* RDR2 CHAPTER SCREEN */
/* ========================= */



function openChapterScreen(){


console.log("ENTERING RDR2");



changeScene("chapterScene");



}






/* ========================= */
/* FUTURE SCREEN */
/* ========================= */



function openFuture(){


changeScene("futureScene");


}






/* ========================= */
/* BUTTON EVENTS */
/* ========================= */



let missionButton =
document.getElementById(
"missionStartButton"
);



if(missionButton){


missionButton.addEventListener(
"click",
()=>{


startGtaVideo();


}

);


}






/* ========================= */
/* START GAME FLOW */
/* ========================= */



function continueGame(){


console.log(
"Opening save file..."
);



changeScene("bootScene");



setTimeout(()=>{


startBoot();


},500);



}






let continueButton =
document.getElementById(
"continueButton"
);



if(continueButton){


continueButton.addEventListener(
"click",
continueGame
);


}
    /* ========================= */
/* GTA VIDEO + RDR2 FLOW */
/* ========================= */


const gtaVideo = document.getElementById("gtaVideo");

const missionButton = document.getElementById("missionStartButton");

const gtaLoadingScene = document.getElementById("gtaLoadingScene");

const gtaVideoScene = document.getElementById("gtaVideoScene");

const chapterScene = document.getElementById("chapterScene");




function showScene(scene){

    document.querySelectorAll(".scene").forEach(s=>{
        s.classList.remove("active");
    });


    if(scene){

        scene.classList.add("active");

    }

}






/* ========================= */
/* GTA LOADING START */
/* ========================= */


function startGtaLoading(){

    console.log("GTA LAMAR SCREEN");


    showScene(gtaLoadingScene);


}









/* ========================= */
/* MISSION BUTTON */
/* ========================= */


if(missionButton){


missionButton.addEventListener("click",()=>{


    console.log("Starting GTA Video");


    showScene(gtaVideoScene);



    if(gtaVideo){


        gtaVideo.currentTime = 0;


        gtaVideo.muted = false;


        gtaVideo.volume = 1;


        gtaVideo.play()
        .then(()=>{


            console.log("GTA VIDEO + SOUND PLAYING 🎵");


        })
        .catch(err=>{


            console.log("VIDEO ERROR",err);


        });



    }



});



}










/* ========================= */
/* VIDEO END */
/* ========================= */


if(gtaVideo){



gtaVideo.addEventListener("ended",()=>{


    console.log("Video finished");


    setTimeout(()=>{


        console.log("Entering RDR2");


        showScene(chapterScene);



    },1000);



});



}










/* ========================= */
/* LOADING DOTS */
/* ========================= */


const dots = document.getElementById("loadingDots");


let dotCount = 0;



if(dots){


setInterval(()=>{


    dotCount++;


    if(dotCount>3){

        dotCount=0;

    }


    dots.textContent=".".repeat(dotCount);



},500);



}








/* ========================= */
/* PS5 BOOT FIX */
/* ========================= */


const bootProgress =
document.getElementById("bootProgress");



if(bootProgress){


setTimeout(()=>{


    bootProgress.style.width="100%";


},100);



}









/* ========================= */
/* PLAYER CARD FIX */
/* ========================= */


const playerCards =
document.querySelectorAll(".boot-card");



playerCards.forEach((card,index)=>{


    setTimeout(()=>{


        card.style.opacity="1";


        card.style.transform="translateY(0)";



    },2000+(index*800));



});










/* ========================= */
/* INITIAL LOAD */
/* ========================= */


window.addEventListener("load",()=>{


console.log("Game system loaded 🎮");



});



}
