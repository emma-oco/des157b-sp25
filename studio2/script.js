(function(){
    'use strict';

    const dates = document.querySelectorAll(".date");
    const closes = document.querySelectorAll(".close");

    async function getData(){
        const myMoves = await fetch('data.json');
        const data = await myMoves.json();
        return data;
    }
    //open popup
    dates.forEach(function(date){
        date.addEventListener("click", function(){
                date.innerHTML = `<div class="popUp">
                
                <button class="close" type="button">X</button>
                <p>Exercise:</p>
                </div>`
        });
    });

    //close popup    
    closes.forEach(function(close){
        close.addEventListener("click",function(){
            document.querySelector(".popUp").style.display = "none";
        });
    });


    function outputData(data){
        const exercise = ['WALK', 'HOT VINYASA', 'HOT PILATES'];
    }

    



})()