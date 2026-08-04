console.log("Májinka & Kubík Anniversary Edition 🎮❤️");


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



function openScene(scene){

    document.querySelectorAll(".scene")
    .forEach(s=>{
        s.classList.remove("active");
    });


    if(scene){
        scene.classList.add("active");
    }

}




if(startButton){

startButton.onclick=()=>{

    openScene(saveScene);

};

}



if(continueButton){

continueButton.onclick=()=>{

    openScene(bootScene);

    startBoot();

};

}




function startBoot(){

    if(bootProgress){

        bootProgress.style.width="100%";

    }


    setTimeout(()=>{

        openScene(gtaLoadingScene);

    },15000);

}




if(missionStartButton){

missionStartButton.onclick=()=>{


    openScene(gtaVideoScene);


    if(gtaVideo){

        gtaVideo.currentTime=0;

        gtaVideo.play();

    }


};


}




if(gtaVideo){

gtaVideo.onended=()=>{


    openChapterSelect();


};


}




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


let index =
chapters.indexOf(unlockedChapter);



cards.forEach(card=>{


let id=card.dataset.chapter;


let cardIndex=chapters.indexOf(id);



if(cardIndex<=index){

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



}



const cursor=document.querySelector(".custom-cursor");


document.addEventListener("mousemove",(e)=>{

if(cursor){

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

}

});




window.onload=()=>{

console.log("Game system loaded 🎮");

updateChapters();

};
const cursor = document.querySelector(".custom-cursor");

console.log("Cursor:", cursor);


document.addEventListener("mousemove", function(e){

    if(cursor){

        cursor.style.left = e.clientX + "px";

        cursor.style.top = e.clientY + "px";

    }

});
