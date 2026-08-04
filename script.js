console.log("Májinka & Kubík Anniversary Edition 🎮❤️");



/* ========================= */
/* ELEMENTS */
/* ========================= */


const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");
const missionStartButton = document.getElementById("missionStartButton");


const saveScene = document.getElementById("saveScene");
const bootScene = document.getElementById("bootScene");
const gtaLoadingScene = document.getElementById("gtaLoadingScene");
const gtaVideoScene = document.getElementById("gtaVideoScene");
const chapterSelectScene = document.getElementById("chapterSelectScene");


const gtaVideo = document.getElementById("gtaVideo");
const bootProgress = document.getElementById("bootProgress");



/* ========================= */
/* SCENE SYSTEM */
/* ========================= */


function openScene(scene){


    console.log("Opening scene:", scene?.id);



    document.querySelectorAll(".scene")
    .forEach(s=>{

        s.classList.remove("active");

    });



    if(scene){

        scene.classList.add("active");

    }


}







/* ========================= */
/* START SCREEN */
/* ========================= */


if(startButton){


startButton.onclick=()=>{


    console.log("Opening save file...");


    openScene(saveScene);


};


}







/* ========================= */
/* SAVE CONTINUE */
/* ========================= */


if(continueButton){


continueButton.onclick=()=>{


    console.log("Starting PS5 Boot...");


    openScene(bootScene);


    startBoot();


};


}







/* ========================= */
/* PS5 BOOT */
/* ========================= */


function startBoot(){


console.log("PS5 BOOT ACTIVE");



if(bootProgress){


    bootProgress.style.width="0%";


    setTimeout(()=>{


        bootProgress.style.width="100%";


    },100);


}





const cards=document.querySelectorAll(".boot-card");



cards.forEach((card,index)=>{


    card.style.opacity="0";


    setTimeout(()=>{


        card.style.opacity="1";


    },2000+(index*1000));


});






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


console.log("GTA Loading Screen");


openScene(gtaLoadingScene);


}








/* ========================= */
/* GTA VIDEO */
/* ========================= */


if(missionStartButton){



missionStartButton.onclick = async ()=>{


console.log("Starting GTA Video");


openScene(gtaVideoScene);




if(gtaVideo){


    gtaVideo.pause();


    gtaVideo.currentTime=0;


    gtaVideo.muted=false;


    gtaVideo.volume=1;




    try{


        await gtaVideo.play();


        console.log("GTA VIDEO PLAYING 🎵");


    }


    catch(error){


        console.log("VIDEO ERROR:",error);


    }



}


};



}








/* ========================= */
/* VIDEO FINISHED */
/* ========================= */


if(gtaVideo){



gtaVideo.onended=()=>{


console.log("GTA video finished");



setTimeout(()=>{


    openChapterSelect();


},1000);



};



}









/* ========================= */
/* STORY PROGRESSION */
/* ========================= */


const chapters=[


"chapter1",
"chapter2",
"chapter3",
"gtaRadio",
"chapter4",
"chapter5"


];




let unlockedChapter = 
localStorage.getItem("chapterProgress") || "chapter1";








function openChapterSelect(){


console.log("Opening Journal");


openScene(chapterSelectScene);


updateChapters();


}








function updateChapters(){



const cards=document.querySelectorAll(".chapter-card");



let currentIndex =
chapters.indexOf(unlockedChapter);





cards.forEach(card=>{


const chapter =
card.dataset.chapter;



const index =
chapters.indexOf(chapter);





const lock =
card.querySelector(".lock");

const status =
card.querySelector(".status");





if(index <= currentIndex){



    card.classList.remove("locked");


    card.classList.add("unlocked");



    if(lock)
    lock.innerHTML="✓";



    if(status)
    status.innerHTML="AVAILABLE";



}

else{



    card.classList.remove("unlocked");


    card.classList.add("locked");



    if(lock)
    lock.innerHTML="🔒";



    if(status)
    status.innerHTML="LOCKED";



}



});







const progress =
document.getElementById("storyProgress");



if(progress){


progress.innerHTML =
(currentIndex+1)+" / 06";


}



}








/* ========================= */
/* CHAPTER CLICK */
/* ========================= */


document.querySelectorAll(".chapter-card")
.forEach(card=>{



card.onclick=()=>{


if(card.classList.contains("locked")){


console.log("Chapter locked 🔒");


return;


}



const selected =
card.dataset.chapter;



console.log(
"Selected chapter:",
selected
);



/*

SEM POZDĚJI NAPOJÍME:

chapter1Scene
chapter2Scene
chapter3Scene
gtaRadioScene
chapter4Scene
chapter5Scene

*/



};



});








/* ========================= */
/* COMPLETE CHAPTER */
/* ========================= */


function completeChapter(chapter){



let index =
chapters.indexOf(chapter);




if(index < chapters.length-1){



localStorage.setItem(

"chapterProgress",

chapters[index+1]

);



console.log(

"Unlocked:",

chapters[index+1]

);



}




openChapterSelect();



}








/* ========================= */
/* LOADING DOTS */
/* ========================= */


const dots =
document.getElementById("loadingDots");


let count=0;



if(dots){


setInterval(()=>{


count++;


if(count>3){

count=0;

}



dots.textContent =
".".repeat(count);



},500);



}









/* ========================= */
/* CUSTOM CURSOR */
/* ========================= */


const cursor =
document.querySelector(".custom-cursor");



document.addEventListener("mousemove",(e)=>{


if(!cursor)
return;



cursor.style.left =
e.clientX+"px";



cursor.style.top =
e.clientY+"px";



});








window.onload=()=>{


console.log("Game system loaded 🎮");


updateChapters();


};
