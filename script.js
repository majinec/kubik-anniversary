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

    if(!scene) return;

    document.querySelectorAll(".scene").forEach(s=>{
        s.classList.remove("active");
    });


    scene.classList.add("active");

    console.log("Opened:", scene.id);

}





/* ========================= */
/* START */
/* ========================= */


if(startButton){

startButton.addEventListener("click",()=>{

    console.log("Opening save file");

    openScene(saveScene);

});

}







/* ========================= */
/* CONTINUE */
/* ========================= */


if(continueButton){

continueButton.addEventListener("click",()=>{

    console.log("Starting PS5 boot");

    openScene(bootScene);

    startBoot();

});

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




setTimeout(()=>{

openGtaLoading();

},15000);



}







/* ========================= */
/* GTA LOADING */
/* ========================= */


function openGtaLoading(){

console.log("GTA Loading");

openScene(gtaLoadingScene);

}








/* ========================= */
/* GTA VIDEO */
/* ========================= */


if(missionStartButton){

missionStartButton.onclick=async()=>{


console.log("Starting GTA video");


openScene(gtaVideoScene);



if(gtaVideo){


gtaVideo.currentTime=0;

gtaVideo.muted=false;


try{

await gtaVideo.play();

console.log("Video playing");

}

catch(e){

console.log(e);

}



}



};


}








/* ========================= */
/* AFTER VIDEO */
/* ========================= */


if(gtaVideo){

gtaVideo.onended=()=>{


console.log("Video finished");


setTimeout(()=>{

openChapterSelect();

},1000);



};


}








/* ========================= */
/* CHAPTER SYSTEM */
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

openScene(chapterSelectScene);

updateChapters();

}







function updateChapters(){


const cards=document.querySelectorAll(".chapter-card");


let currentIndex=
chapters.indexOf(unlockedChapter);



cards.forEach(card=>{


let id=card.dataset.chapter;

let index=chapters.indexOf(id);


let lock=card.querySelector(".lock");

let status=card.querySelector(".status");



if(index<=currentIndex){


card.classList.add("unlocked");

card.classList.remove("locked");


if(lock)
lock.innerHTML="✓";


if(status)
status.innerHTML="AVAILABLE";



}else{


card.classList.add("locked");

card.classList.remove("unlocked");


if(lock)
lock.innerHTML="🔒";


if(status)
status.innerHTML="LOCKED";


}



});



let progress=document.getElementById("storyProgress");


if(progress){

progress.innerHTML=
(currentIndex+1)+" / 06";

}



}








/* ========================= */
/* CHAPTER CLICK */
/* ========================= */


document.querySelectorAll(".chapter-card")
.forEach(card=>{


card.addEventListener("click",()=>{


if(card.classList.contains("locked")){

console.log("Locked");

return;

}


console.log(
"Selected:",
card.dataset.chapter
);


});


});









/* ========================= */
/* LOADING DOTS */
/* ========================= */


const dots=document.getElementById("loadingDots");

let count=0;


if(dots){

setInterval(()=>{


count++;


if(count>3)
count=0;


dots.textContent=".".repeat(count);


},500);


}







/* ========================= */
/* CURSOR */
/* ========================= */


const cursor=document.querySelector(".custom-cursor");


document.addEventListener("mousemove",(e)=>{


if(cursor){

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

}


});






window.addEventListener("load",()=>{

console.log("Game system loaded 🎮");

updateChapters();

});
