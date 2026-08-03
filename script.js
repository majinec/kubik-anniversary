console.log("Májinka & Kubík Anniversary Edition 🎮❤️");



// CUSTOM CURSOR

const cursor = document.querySelector(".custom-cursor");


document.addEventListener("mousemove", (e)=>{


    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";


});




// START BUTTON

const startButton = document.getElementById("startButton");


startButton.addEventListener("click", ()=>{


    console.log("GAME STARTED");


});
