console.log("Májinka & Kubík Anniversary Edition 🎮❤️");


// =========================
// CUSTOM CURSOR
// =========================

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});




// =========================
// BUTTONS
// =========================

const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");

const backButton = document.getElementById("backButton");
const bootBackButton = document.getElementById("bootBackButton");




// =========================
// SCENES
// =========================

const startScene = document.getElementById("startScene");
const saveScene = document.getElementById("saveScene");
const bootScene = document.getElementById("bootScene");
const gtaScene = document.getElementById("gtaScene");




// =========================
// VIDEO
// =========================

const gtaVideo = document.getElementById("gtaVideo");






// =========================
// START → SAVE
// =========================

startButton.addEventListener("click", ()=>{


    console.log("Loading save data...");


    startScene.classList.remove("active");


    setTimeout(()=>{


        saveScene.classList.add("active");


    },800);


});







// =========================
// SAVE → START
// =========================

backButton.addEventListener("click", ()=>{


    saveScene.classList.remove("active");


    setTimeout(()=>{


        startScene.classList.add("active");


    },500);


});







// =========================
// SAVE → PS5 BOOT
// =========================

continueButton.addEventListener("click", ()=>{


    console.log("Starting PS5 Boot...");


    saveScene.classList.remove("active");


    setTimeout(()=>{


        bootScene.classList.add("active");


        startBootSequence();


    },800);


});








// =========================
// PS5 BOOT TIMER TEST
// =========================

function startBootSequence(){


    console.log("PS5 BOOT ACTIVE");


    let counter = 0;



    const testTimer = setInterval(()=>{


        counter++;


        console.log("BOOT TIMER:", counter);



        if(counter >= 15){


            clearInterval(testTimer);



            console.log("PS5 BOOT FINISHED");



            launchGTA();



        }


    },1000);



}








// =========================
// GTA START
// =========================

function launchGTA(){


    console.log("LAUNCHING GTA V");



    bootScene.classList.remove("active");



    setTimeout(()=>{


        gtaScene.classList.add("active");



        if(gtaVideo){


            gtaVideo.currentTime = 0;


            gtaVideo.play()
            .then(()=>{


                console.log("GTA VIDEO PLAYING");


            })
            .catch((error)=>{


                console.log("VIDEO ERROR:", error);


            });


        }



    },1000);



}








// =========================
// BACK FROM PS5
// =========================

bootBackButton.addEventListener("click", ()=>{


    bootScene.classList.remove("active");


    saveScene.classList.add("active");


});
