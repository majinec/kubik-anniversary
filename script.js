console.log("Májinka & Kubík Anniversary Edition 🎮❤️");


// CURSOR

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});




// BUTTONS

const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");
const backButton = document.getElementById("backButton");
const bootBackButton = document.getElementById("bootBackButton");




// SCENES

const startScene = document.getElementById("startScene");
const saveScene = document.getElementById("saveScene");
const bootScene = document.getElementById("bootScene");
const gtaScene = document.getElementById("gtaScene");

const gtaVideo = document.getElementById("gtaVideo");




// START → SAVE

startButton.addEventListener("click", ()=>{


    startScene.classList.remove("active");


    setTimeout(()=>{

        saveScene.classList.add("active");

    },800);


});





// SAVE → START

backButton.addEventListener("click", ()=>{


    saveScene.classList.remove("active");


    setTimeout(()=>{

        startScene.classList.add("active");

    },500);


});





// SAVE → PS5

continueButton.addEventListener("click", ()=>{


    saveScene.classList.remove("active");


    setTimeout(()=>{


        bootScene.classList.add("active");


    },800);


});






// PS5 → GTA

setTimeout(()=>{


    if(bootScene.classList.contains("active")){


        bootScene.classList.remove("active");


        setTimeout(()=>{


            gtaScene.classList.add("active");


            gtaVideo.play();


        },1000);


    }


},18000);







// PS5 BACK

bootBackButton.addEventListener("click", ()=>{


    bootScene.classList.remove("active");


    setTimeout(()=>{

        saveScene.classList.add("active");

    },500);


});
