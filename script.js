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



/* ========================= */
/* SCENE SYSTEM */
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


if(startButton){

    startButton.onclick = ()=>{

        openScene(saveScene);

    };

}





/* ========================= */
/* SAVE -> BOOT */
/* ========================= */


if(continueButton){

    continueButton.onclick = ()=>{


        openScene(bootScene);


        startBoot();


    };

}





function startBoot(){


    if(bootProgress){

        bootProgress.style.width="0";


        setTimeout(()=>{

            bootProgress.style.width="100%";

        },100);

    }



    setTimeout(()=>{


        openScene(gtaLoadingScene);


    },15000);


}







/* ========================= */
/* GTA VIDEO */
/* ========================= */


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


    let index = chapters.indexOf(unlockedChapter);



    cards.forEach(card=>{


        let id = card.dataset.chapter;


        let cardIndex = chapters.indexOf(id);



        if(cardIndex <= index){



            card.classList.remove("locked");

            card.classList.add("unlocked");


            let lock = card.querySelector(".lock");

            let status = card.querySelector(".status");



            if(lock){

                lock.innerHTML="✓";

            }



            if(status){

                status.innerHTML="AVAILABLE";

            }




        }else{



            card.classList.remove("unlocked");

            card.classList.add("locked");



            let lock = card.querySelector(".lock");

            let status = card.querySelector(".status");



            if(lock){

                lock.innerHTML="🔒";

            }



            if(status){

                status.innerHTML="LOCKED";

            }



        }


    });



}









/* ========================= */
/* CUSTOM CURSOR */
/* ========================= */



const cursor = document.querySelector(".custom-cursor");



console.log("Cursor:", cursor);




document.addEventListener("mousemove",(e)=>{


    if(cursor){


        cursor.style.left = e.clientX + "px";


        cursor.style.top = e.clientY + "px";


    }


});








/* ========================= */
/* LOAD */
/* ========================= */


window.onload=()=>{


    console.log("Game system loaded 🎮");


    updateChapters();


};


// =================================
// CHAPTER I SYSTEM
// =================================


const chapter1Card = document.querySelector('[data-chapter="chapter1"]');

const chapter1IntroScene = document.getElementById("chapter1IntroScene");

const chapter1VideoScene = document.getElementById("chapter1VideoScene");

const chapter1StartButton = document.getElementById("chapter1StartButton");

const chapter1Video = document.getElementById("chapter1Video");

const achievementScene = document.getElementById("achievementScene");

const returnStoryButton = document.getElementById("returnStoryButton");




// OPEN CHAPTER I

if(chapter1Card){

    chapter1Card.onclick = ()=>{

        console.log("Opening Chapter I");

        openScene(chapter1IntroScene);

    };

}




// START CHAPTER VIDEO

if(chapter1StartButton){

    chapter1StartButton.onclick = ()=>{


        console.log("Starting Chapter I video");


        openScene(chapter1VideoScene);



        if(chapter1Video){


            chapter1Video.currentTime = 0;


            chapter1Video.play();


        }


    };

}




// VIDEO END

if(chapter1Video){


    chapter1Video.onended = ()=>{


        console.log(
            "Chapter I finished"
        );


        localStorage.setItem(
            "chapterProgress",
            "chapter2"
        );


        openScene(
            achievementScene
        );


    };


}






// RETURN BUTTON

if(returnStoryButton){

    returnStoryButton.onclick = ()=>{


        openScene(
            chapterSelectScene
        );


        updateChapters();


    };

}
