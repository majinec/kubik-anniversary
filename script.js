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
const bootProgress = document.getElementById("bootProgress");




/* ========================= */
/* SCENE SYSTEM */
/* ========================= */


function openScene(scene){

    document.querySelectorAll(".scene")
    .forEach(s=>{
        s.classList.remove("active");
    });


    if(scene){

        scene.classList.add("active");

    }

}




/* ========================= */
/* START */
/* ========================= */


startButton.onclick=()=>{

    console.log("Opening save file...");

    openScene(saveScene);

};





/* ========================= */
/* CONTINUE */
/* ========================= */


continueButton.onclick=()=>{


    console.log("Starting PS5 Boot...");


    openScene(bootScene);


    startBoot();


};







/* ========================= */
/* PS5 BOOT */
/* ========================= */


function startBoot(){


console.log("PS5 BOOT ACTIVE");



/* progress */

if(bootProgress){

bootProgress.style.width="0%";


setTimeout(()=>{

bootProgress.style.width="100%";

},100);


}




/* cards */


const cards=document.querySelectorAll(".boot-card");


cards.forEach((card,index)=>{


card.style.opacity="0";


setTimeout(()=>{


card.style.opacity="1";


},2000+(index*1000));


});





/* connection */


const connection=document.querySelector(".connection");


if(connection){


connection.style.opacity="0";


setTimeout(()=>{

connection.style.opacity="1";


},5000);


}





setTimeout(()=>{


openGtaLoading();


},15000);



}








/* ========================= */
/* GTA LOADING */
/* ========================= */


function openGtaLoading(){


console.log("GTA LAMAR SCREEN");


openScene(gtaLoadingScene);



}










/* ========================= */
/* MISSION BUTTON */
/* ========================= */


missionStartButton.onclick = async ()=>{


console.log("Starting GTA Video");


openScene(gtaVideoScene);



if(gtaVideo){


    gtaVideo.pause();


    gtaVideo.currentTime = 0;


    gtaVideo.muted = false;


    gtaVideo.volume = 1;



    try {


        await gtaVideo.play();


        console.log("GTA VIDEO + SOUND PLAYING 🎵");


    }


    catch(err){


        console.log("VIDEO ERROR:", err);


    }


}


};







/* ========================= */
/* VIDEO END */
/* ========================= */


if(gtaVideo){



gtaVideo.onended=()=>{


console.log("Video finished");


setTimeout(()=>{


console.log("Entering RDR2");


openScene(chapterScene);



},1000);



};


}










/* ========================= */
/* LOADING DOTS */
/* ========================= */


const dots=document.getElementById("loadingDots");


let count=0;


if(dots){


setInterval(()=>{


count++;


if(count>3){

count=0;

}


dots.textContent=".".repeat(count);



},500);


}






window.onload=()=>{


console.log("Game system loaded 🎮");


};
/* ========================= */
/* CUSTOM CURSOR */
/* ========================= */

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {

    if (!cursor) return;

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});
