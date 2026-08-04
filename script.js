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
/* GTA VIDEO START */
/* ========================= */


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


        console.log("VIDEO PLAYING 🎵");


    }

    catch(err){

        console.log("VIDEO ERROR:",err);

    }


}


};







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



let unlockedChapter = 
localStorage.getItem("chapterProgress") || "chapter1";





function openChapterSelect(){


openScene(chapterSelectScene);


updateChapters();


}






function updateChapters(){


const cards=document.querySelectorAll(".chapter-card");


let order=[

"chapter1",
"chapter2",
"chapter3",
"gtaRadio",
"chapter4",
"chapter5"

];



let currentIndex = order.indexOf(unlockedChapter);



cards.forEach((card)=>{


let chapter = card.dataset.chapter;


let index = order.indexOf(chapter);



if(index <= currentIndex){


card.classList.remove("locked");

card.classList.add("unlocked");


card.querySelector(".lock").innerHTML="✓";


card.querySelector(".status").innerHTML="AVAILABLE";


}

else{


card.classList.remove("unlocked");

card.classList.add("locked");


card.querySelector(".lock").innerHTML="🔒";


card.querySelector(".status").innerHTML="LOCKED";


}



});



document.getElementById("storyProgress").innerHTML =

(currentIndex+1)+" / 06";



}








/* ========================= */
/* CLICK CHAPTER */
/* ========================= */


document.querySelectorAll(".chapter-card")
.forEach(card=>{


card.onclick=()=>{


if(card.classList.contains("locked")){


console.log("Chapter locked 🔒");


return;


}



let selected = card.dataset.chapter;


console.log("Opening:",selected);



/*

TADY POZDĚJI NAPOJÍME:

chapter1Scene
chapter2Scene
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



let order=[

"chapter1",
"chapter2",
"chapter3",
"gtaRadio",
"chapter4",
"chapter5"

];



let index=order.indexOf(chapter);



if(index < order.length-1){


localStorage.setItem(

"chapterProgress",

order[index+1]

);


console.log(

"Unlocked:",

order[index+1]

);


}



openChapterSelect();



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






/* ========================= */
/* CURSOR */
/* ========================= */


const cursor=document.querySelector(".custom-cursor");


document.addEventListener("mousemove",(e)=>{


if(!cursor)return;


cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";


});





window.onload=()=>{


console.log("Game system loaded 🎮");


updateChapters();


};

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


missionStartButton.onclick = ()=>{


console.log("Starting GTA Video");


openScene(gtaVideoScene);



setTimeout(()=>{


    if(gtaVideo){


        gtaVideo.pause();


        gtaVideo.currentTime = 0;


        gtaVideo.muted = false;


        gtaVideo.volume = 1;


        gtaVideo.play()
        .then(()=>{


            console.log("GTA VIDEO + SOUND PLAYING 🎵");


        })
        .catch(error=>{


            console.log("VIDEO ERROR:", error);


        });


    }


},100);



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
