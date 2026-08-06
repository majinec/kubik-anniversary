web
console.log("Májinka & Kubík Anniversary Edition 🎮❤️");


/* =====================================================
   GLOBAL ELEMENTS
===================================================== */


const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");
const missionStartButton = document.getElementById("missionStartButton");


const scenes = document.querySelectorAll(".scene");


const saveScene = document.getElementById("saveScene");
const bootScene = document.getElementById("bootScene");
const gtaLoadingScene = document.getElementById("gtaLoadingScene");
const gtaVideoScene = document.getElementById("gtaVideoScene");
const chapterSelectScene = document.getElementById("chapterSelectScene");


const gtaVideo = document.getElementById("gtaVideo");
const bootProgress = document.getElementById("bootProgress");



/* =====================================================
   SCENE SYSTEM
===================================================== */


function openScene(scene){

    if(!scene){
        console.warn("Scene not found");
        return;
    }


    scenes.forEach(currentScene=>{

        currentScene.classList.remove("active");

    });


    scene.classList.add("active");


}






/* =====================================================
   START GAME
===================================================== */


if(startButton){

    startButton.addEventListener("click",()=>{

        openScene(saveScene);

    });

}







/* =====================================================
   SAVE / CONTINUE SYSTEM
===================================================== */


if(continueButton){

    continueButton.addEventListener("click",()=>{


        openScene(bootScene);


        startBoot();


    });

}







function startBoot(){


    if(bootProgress){


        bootProgress.style.width="0%";


        setTimeout(()=>{

            bootProgress.style.width="100%";


        },100);


    }



    setTimeout(()=>{


        openScene(gtaLoadingScene);



    },15000);


}








/* =====================================================
   GTA INTRO VIDEO
===================================================== */


if(missionStartButton){


    missionStartButton.addEventListener("click",()=>{


        openScene(gtaVideoScene);



        if(gtaVideo){


            gtaVideo.currentTime=0;


            gtaVideo.play()
            .catch(error=>{

                console.log(
                    "GTA video error:",
                    error
                );

            });


        }


    });


}





if(gtaVideo){


    gtaVideo.addEventListener(
        "ended",
        ()=>{


            console.log(
                "GTA Intro finished 🎬"
            );


            openChapterSelect();


        }
    );


}








/* =====================================================
   CHAPTER DATABASE
===================================================== */


const chapters=[

    "chapter1",
    "chapter2",
    "chapter3",
    "gtaRadio",
    "chapter4",
    "chapter5"

];



let unlockedChapter =
localStorage.getItem(
    "chapterProgress"
) || "chapter1";









/* =====================================================
   CHAPTER SELECT
===================================================== */


function openChapterSelect(){


    openScene(
        chapterSelectScene
    );


    updateChapters();


}






function updateChapters(){


    const cards =
    document.querySelectorAll(
        ".chapter-card"
    );


    const unlockedIndex =
    chapters.indexOf(
        unlockedChapter
    );



    cards.forEach(card=>{


        const id =
        card.dataset.chapter;



        const cardIndex =
        chapters.indexOf(id);



        const lock =
        card.querySelector(
            ".lock"
        );


        const status =
        card.querySelector(
            ".status"
        );




        if(cardIndex <= unlockedIndex){


            card.classList.remove(
                "locked"
            );


            card.classList.add(
                "unlocked"
            );


            if(lock){

                lock.textContent="✓";

            }


            if(status){

                status.textContent="AVAILABLE";

            }



        }else{


            card.classList.remove(
                "unlocked"
            );


            card.classList.add(
                "locked"
            );



            if(lock){

                lock.textContent="🔒";

            }


            if(status){

                status.textContent="LOCKED";

            }



        }


    });


}








/* =====================================================
   PROGRESS SYSTEM
===================================================== */


function unlockChapter(chapter){


    localStorage.setItem(
        "chapterProgress",
        chapter
    );


    unlockedChapter = chapter;


    updateChapters();


}







/* =====================================================
   CUSTOM CURSOR
===================================================== */


const cursor =
document.querySelector(
    ".custom-cursor"
);



document.addEventListener(
    "mousemove",
    (event)=>{


        if(cursor){


            cursor.style.left =
            event.clientX + "px";


            cursor.style.top =
            event.clientY + "px";


        }


    }

);








/* =====================================================
   VIDEO PLAYER HELPER
===================================================== */


function playVideo(video){


    if(!video){
        return;
    }



    video.pause();


    video.currentTime=0;


    video.muted=true;



    video.play()

    .then(()=>{


        setTimeout(()=>{


            video.muted=false;


        },500);



    })


    .catch(error=>{


        console.log(
            "Video play error:",
            error
        );


    });


}







/* =====================================================
   INITIAL LOAD
===================================================== */


window.addEventListener(
    "load",
    ()=>{


        console.log(
            "Game system loaded 🎮"
        );


        updateChapters();


    }
);
/* =====================================================
   CHAPTER I SYSTEM
===================================================== */


const chapter1Card =
document.querySelector(
    '[data-chapter="chapter1"]'
);


const chapter1IntroScene =
document.getElementById(
    "chapter1IntroScene"
);


const chapter1VideoScene =
document.getElementById(
    "chapter1VideoScene"
);


const chapter1StartButton =
document.getElementById(
    "chapter1StartButton"
);


const chapter1Video =
document.getElementById(
    "chapter1Video"
);


const achievementScene =
document.getElementById(
    "achievementScene"
);


const returnStoryButton =
document.getElementById(
    "returnStoryButton"
);





if(chapter1Card){

    chapter1Card.addEventListener(
        "click",
        ()=>{


            if(
                chapter1Card.classList.contains(
                    "locked"
                )
            ){
                return;
            }


            openScene(
                chapter1IntroScene
            );


        }
    );

}





if(chapter1StartButton){


    chapter1StartButton.addEventListener(
        "click",
        ()=>{


            openScene(
                chapter1VideoScene
            );


            playVideo(
                chapter1Video
            );


        }
    );


}




if(chapter1Video){


    chapter1Video.addEventListener(
        "ended",
        ()=>{


            console.log(
                "Chapter I completed 🏆"
            );


            unlockChapter(
                "chapter2"
            );


            openScene(
                achievementScene
            );


        }
    );


}






/* =====================================================
   CHAPTER II SYSTEM
===================================================== */


const chapter2Card =
document.querySelector(
    '[data-chapter="chapter2"]'
);


const chapter2IntroScene =
document.getElementById(
    "chapter2IntroScene"
);


const chapter2VideoScene =
document.getElementById(
    "chapter2VideoScene"
);


const chapter2StartButton =
document.getElementById(
    "chapter2StartButton"
);


const chapter2Video =
document.getElementById(
    "chapter2Video"
);


const chapter2AchievementScene =
document.getElementById(
    "chapter2AchievementScene"
);


const returnStoryButton2 =
document.getElementById(
    "returnStoryButton2"
);







if(chapter2Card){


    chapter2Card.addEventListener(
        "click",
        ()=>{


            if(
                chapter2Card.classList.contains(
                    "locked"
                )
            ){
                return;
            }


            openScene(
                chapter2IntroScene
            );


        }
    );


}






if(chapter2StartButton){


    chapter2StartButton.addEventListener(
        "click",
        ()=>{


            openScene(
                chapter2VideoScene
            );


            playVideo(
                chapter2Video
            );


        }
    );


}






if(chapter2Video){


    chapter2Video.addEventListener(
        "ended",
        ()=>{


            console.log(
                "Chapter II completed 🏆"
            );


            unlockChapter(
                "chapter3"
            );


            openScene(
                chapter2AchievementScene
            );


        }
    );


}






/* =====================================================
   CHAPTER III SYSTEM
===================================================== */


const chapter3Card =
document.querySelector(
    '[data-chapter="chapter3"]'
);


const chapter3IntroScene =
document.getElementById(
    "chapter3IntroScene"
);


const chapter3VideoScene =
document.getElementById(
    "chapter3VideoScene"
);


const chapter3StartButton =
document.getElementById(
    "chapter3StartButton"
);


const chapter3Video =
document.getElementById(
    "chapter3Video"
);


const chapter3AchievementScene =
document.getElementById(
    "chapter3AchievementScene"
);


const returnStoryButton3 =
document.getElementById(
    "returnStoryButton3"
);







if(chapter3Card){


    chapter3Card.addEventListener(
        "click",
        ()=>{


            if(
                chapter3Card.classList.contains(
                    "locked"
                )
            ){
                return;
            }


            openScene(
                chapter3IntroScene
            );


        }
    );


}







if(chapter3StartButton){


    chapter3StartButton.addEventListener(
        "click",
        ()=>{


            openScene(
                chapter3VideoScene
            );


            playVideo(
                chapter3Video
            );


        }
    );


}







if(chapter3Video){


    chapter3Video.addEventListener(
        "ended",
        ()=>{


            console.log(
                "Chapter III completed 🏆"
            );


            unlockChapter(
                "gtaRadio"
            );


            openScene(
                chapter3AchievementScene
            );


        }
    );


}







/* =====================================================
   RETURN BUTTONS
===================================================== */


[
    returnStoryButton,
    returnStoryButton2,
    returnStoryButton3

].forEach(button=>{


    if(button){


        button.addEventListener(
            "click",
            ()=>{


                openScene(
                    chapterSelectScene
                );


                updateChapters();


            }
        );


    }


});









/* =====================================================
   GTA RADIO SYSTEM
===================================================== */


const gtaRadioCard =
document.querySelector(
    '[data-chapter="gtaRadio"]'
);


const gtaRadioScene =
document.getElementById(
    "gtaRadioScene"
);


const returnRadioButton =
document.getElementById(
    "returnRadioButton"
);





if(gtaRadioCard){


    gtaRadioCard.addEventListener(
        "click",
        ()=>{


            if(
                gtaRadioCard.classList.contains(
                    "locked"
                )
            ){

                return;

            }


            openScene(
                gtaRadioScene
            );


        }
    );


}






const vinyls =
document.querySelectorAll(
    ".vinyl"
);



let currentAudio = null;

let currentVinyl = null;






vinyls.forEach(vinyl=>{


    vinyl.addEventListener(
        "click",
        ()=>{


            const audioId =
            vinyl.dataset.audio;



            const audio =
            document.getElementById(
                audioId
            );



            if(!audio){
                return;
            }





            if(currentAudio === audio){


                audio.pause();


                audio.currentTime=0;


                vinyl.classList.remove(
                    "playing"
                );


                currentAudio=null;

                currentVinyl=null;


                return;


            }






            if(currentAudio){


                currentAudio.pause();


                currentAudio.currentTime=0;


            }



            if(currentVinyl){


                currentVinyl.classList.remove(
                    "playing"
                );


            }






            audio.play();



            vinyl.classList.add(
                "playing"
            );



            currentAudio=audio;

            currentVinyl=vinyl;



        }
    );


});






if(returnRadioButton){


    returnRadioButton.addEventListener(
        "click",
        ()=>{


            if(currentAudio){


                currentAudio.pause();


                currentAudio.currentTime=0;


            }


            if(currentVinyl){


                currentVinyl.classList.remove(
                    "playing"
                );


            }



            unlockChapter(
                "chapter4"
            );



            openScene(
                chapterSelectScene
            );


            updateChapters();



        }
    );


}
/* =====================================================
   CHAPTER IV SYSTEM
===================================================== */


const chapter4Card =
document.querySelector(
    '[data-chapter="chapter4"]'
);


const chapter4IntroScene =
document.getElementById(
    "chapter4IntroScene"
);


const chapter4JournalScene =
document.getElementById(
    "chapter4JournalScene"
);


const chapter4StartButton =
document.getElementById(
    "chapter4StartButton"
);


const journalBook =
document.getElementById(
    "journalBook"
);


const returnChapter4Button =
document.getElementById(
    "returnChapter4Button"
);






/* OPEN CHAPTER IV */


if(chapter4Card){


    chapter4Card.addEventListener(
        "click",
        ()=>{


            if(
                chapter4Card.classList.contains(
                    "locked"
                )
            ){
                return;
            }



            openScene(
                chapter4IntroScene
            );



        }
    );


}







/* OPEN JOURNAL */


if(chapter4StartButton){


    chapter4StartButton.addEventListener(
        "click",
        ()=>{


            openScene(
                chapter4JournalScene
            );



            setTimeout(()=>{


                if(journalBook){


                    journalBook.classList.add(
                        "opened"
                    );


                }


            },500);



        }
    );


}







/* COMPLETE CHAPTER IV */


if(returnChapter4Button){


    returnChapter4Button.addEventListener(
        "click",
        ()=>{


            console.log(
                "Chapter IV completed 📖"
            );



            unlockChapter(
                "chapter5"
            );



            openScene(
                chapterSelectScene
            );



            updateChapters();



        }
    );


}









/* =====================================================
   CHAPTER V SYSTEM
===================================================== */


const chapter5Card =
document.querySelector(
    '[data-chapter="chapter5"]'
);



const chapter5IntroScene =
document.getElementById(
    "chapter5IntroScene"
);



const chapter5FinalScene =
document.getElementById(
    "chapter5FinalScene"
);



const chapter5StartButton =
document.getElementById(
    "chapter5StartButton"
);



const finalGift =
document.getElementById(
    "finalGift"
);



const finalMessage =
document.getElementById(
    "finalMessage"
);






/* OPEN CHAPTER V */


if(chapter5Card){


    chapter5Card.addEventListener(
        "click",
        ()=>{


            if(
                chapter5Card.classList.contains(
                    "locked"
                )
            ){
                return;
            }



            console.log(
                "Opening Chapter V ❤️"
            );



            openScene(
                chapter5IntroScene
            );



        }
    );


}








/* START FINAL */



if(chapter5StartButton){


    chapter5StartButton.addEventListener(
        "click",
        ()=>{


            openScene(
                chapter5FinalScene
            );



        }
    );


}







/* FINAL GIFT */


if(finalGift){


    finalGift.addEventListener(
        "click",
        ()=>{


            finalGift.style.display =
            "none";



            if(finalMessage){


                finalMessage.classList.add(
                    "show"
                );


            }



            localStorage.setItem(
                "chapterProgress",
                "completed"
            );



            unlockedChapter =
            "completed";



        }
    );


}









/* =====================================================
   FINAL STATE CHECK
===================================================== */


function resetGame(){


    localStorage.removeItem(
        "chapterProgress"
    );


    unlockedChapter =
    "chapter1";



    location.reload();


}






function getProgress(){


    return localStorage.getItem(
        "chapterProgress"
    );


}






console.log(
    "Anniversary Edition Ready ❤️🎮"
);
