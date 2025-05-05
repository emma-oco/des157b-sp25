(function(){
    'use strict';

    const fs = document.querySelector('.fa-expand');

    fs.addEventListener('click', function(){
        if(!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    })

    const poem = document.querySelector('#poem');
    const text = document.querySelector('#text');
    const image = document.querySelector('#image');
    const intervalD = setInterval(checkTime, 1000);

    function checkTime(){
        if (1< catVideo.currentTime && catVideo.currentTime < 12){
            text.className = "showing";
        } else {
            text.className = "hidden";
        }

        if (5< catVideo.currentTime && catVideo.currentTime <12){
            image.className = "showing";
        } else {
            image.className = "hidden";
        }
    }


})();