console.log("CO-OP STORY LOADED ❤️");


const button = document.getElementById("startButton");


button.addEventListener("click", () => {


    button.style.display="none";


    console.log("GAME STARTED");



    setTimeout(() => {


        const gta = document.getElementById("gtaScreen");
        const video = document.getElementById("gtaVideo");


        gta.style.display="block";


        setTimeout(()=>{


            gta.classList.add("gta-active");


            video.play();


        },4000);



    },15000);



});

}, 15000);
