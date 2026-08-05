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


const chapter1Card = document.querySelector(
    '[data-chapter="chapter1"]'
);

const chapter1IntroScene = document.getElementById(
    "chapter1IntroScene"
);

const chapter1VideoScene = document.getElementById(
    "chapter1VideoScene"
);

const chapter1StartButton = document.getElementById(
    "chapter1StartButton"
);

const chapter1Video = document.getElementById(
    "chapter1Video"
);

const achievementScene = document.getElementById(
    "achievementScene"
);

const returnStoryButton = document.getElementById(
    "returnStoryButton"
);



// DEBUG

console.log(
    "Chapter button:",
    chapter1StartButton
);

console.log(
    "Chapter video:",
    chapter1Video
);




// =================================
// OPEN CHAPTER I
// =================================


if(chapter1Card){


    chapter1Card.onclick = ()=>{


        console.log(
            "Opening Chapter I"
        );


        openScene(
            chapter1IntroScene
        );


    };


}





// =================================
// START CHAPTER I VIDEO
// =================================


// =================================
// CHAPTER I VIDEO START
// =================================


if(chapter1StartButton){


    chapter1StartButton.onclick = ()=>{


        console.log(
            "Opening Chapter I video scene"
        );


        openScene(
            chapter1VideoScene
        );



        if(chapter1Video){


            chapter1Video.pause();


            chapter1Video.currentTime = 0;


            chapter1Video.muted = true;



            chapter1Video.play()
            .then(()=>{


                console.log(
                    "Chapter I video playing 🎬"
                );



                // po spuštění povolíme zvuk


                setTimeout(()=>{


                    chapter1Video.muted = false;


                },500);



            })


            .catch(error=>{


                console.log(
                    "Video error:",
                    error
                );


            });



        }


    };


}




// =================================
// VIDEO FINISHED
// =================================


if(chapter1Video){


    chapter1Video.onended = ()=>{


        console.log(
            "Chapter I completed 🏆"
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





// =================================
// RETURN TO STORY
// =================================


if(returnStoryButton){


    returnStoryButton.onclick = ()=>{


        openScene(
            chapterSelectScene
        );


        updateChapters();


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
// =================================
// CHAPTER II SYSTEM
// =================================


const chapter2Card = document.querySelector(
    '[data-chapter="chapter2"]'
);


const chapter2IntroScene = document.getElementById(
    "chapter2IntroScene"
);


const chapter2VideoScene = document.getElementById(
    "chapter2VideoScene"
);


const chapter2StartButton = document.getElementById(
    "chapter2StartButton"
);


const chapter2Video = document.getElementById(
    "chapter2Video"
);




// =================================
// OPEN CHAPTER II
// =================================


if(chapter2Card){


    chapter2Card.onclick = ()=>{


        console.log(
            "Opening Chapter II"
        );


        openScene(
            chapter2IntroScene
        );


    };


}





// =================================
// START CHAPTER II VIDEO
// =================================


if(chapter2StartButton){


    chapter2StartButton.onclick = ()=>{


        console.log(
            "Opening Chapter II video scene"
        );


        openScene(
            chapter2VideoScene
        );



        if(chapter2Video){


            chapter2Video.pause();


            chapter2Video.currentTime = 0;


            chapter2Video.muted = true;



            chapter2Video.play()

            .then(()=>{


                console.log(
                    "Chapter II video playing 🎬"
                );



                setTimeout(()=>{


                    chapter2Video.muted = false;


                },500);



            })


            .catch(error=>{


                console.log(
                    "Chapter II video error:",
                    error
                );


            });



        }


    };


}






// =================================
// CHAPTER II VIDEO FINISHED
// =================================


if(chapter2Video){


    chapter2Video.onended = ()=>{


        console.log(
            "Chapter II completed 🏆"
        );



        localStorage.setItem(
            "chapterProgress",
            "chapter3"
        );



        openScene(
            achievementScene
        );


    };


}
// =================================
// CHAPTER III SYSTEM
// =================================


const chapter3Card = document.querySelector(
    '[data-chapter="chapter3"]'
);


const chapter3IntroScene = document.getElementById(
    "chapter3IntroScene"
);


const chapter3VideoScene = document.getElementById(
    "chapter3VideoScene"
);


const chapter3StartButton = document.getElementById(
    "chapter3StartButton"
);


const chapter3Video = document.getElementById(
    "chapter3Video"
);


const chapter3AchievementScene = document.getElementById(
    "chapter3AchievementScene"
);


const returnStoryButton3 = document.getElementById(
    "returnStoryButton3"
);





// OPEN CHAPTER III


if(chapter3Card){


    chapter3Card.onclick = ()=>{


        console.log(
            "Opening Chapter III"
        );


        openScene(
            chapter3IntroScene
        );


    };


}






// START CHAPTER III VIDEO


if(chapter3StartButton){


    chapter3StartButton.onclick = ()=>{


        console.log(
            "Opening Chapter III video"
        );


        openScene(
            chapter3VideoScene
        );



        if(chapter3Video){


            chapter3Video.pause();


            chapter3Video.currentTime = 0;


            chapter3Video.muted = true;



            chapter3Video.play()

            .then(()=>{


                console.log(
                    "Chapter III video playing 🎬"
                );



                setTimeout(()=>{


                    chapter3Video.muted = false;


                },500);



            })


            .catch(error=>{


                console.log(
                    "Chapter III video error:",
                    error
                );


            });



        }


    };


}







// CHAPTER III FINISHED


if(chapter3Video){


    chapter3Video.onended = ()=>{


        console.log(
            "Chapter III completed 🏆"
        );



        localStorage.setItem(
            "chapterProgress",
            "chapter4"
        );



        openScene(
            chapter3AchievementScene
        );


    };


}






// RETURN STORY


if(returnStoryButton3){


    returnStoryButton3.onclick = ()=>{


        openScene(
            chapterSelectScene
        );


        updateChapters();


    };


}
