console.log("CO-OP STORY LOADED ❤️");


setTimeout(() => {


    const gta = document.getElementById("gtaScreen");
    const video = document.getElementById("gtaVideo");


    if (!gta || !video) {
        console.log("GTA screen not found");
        return;
    }



    gta.style.display = "block";



    setTimeout(() => {


        gta.classList.add("gta-active");


        video.play().catch(error => {

            console.log("Video autoplay blocked:", error);

        });


    }, 4000);



}, 15000);
