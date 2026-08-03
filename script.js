console.log("CO-OP STORY LOADED ❤️");

setTimeout(() => {


    const gta = document.getElementById("gtaScreen");


    gta.style.display="block";


    setTimeout(()=>{

        gta.classList.add("gta-active");


        document.getElementById("gtaVideo").play();


    },4000);



},15000);
