let homePoints = 0;
let guestPoints = 0;

let elementHomeHeader = document.getElementById("homeHeader");
let elementGuestHeader = document.getElementById("guestHeader");




// change score for home team

function homePlus(n){
    homePoints += (n * 1);
    document.getElementById("homeScore").innerHTML = homePoints;
    scoreBalance();
}


// change score for guest team


function guestPlus(n){
    guestPoints += (n * 1);
    document.getElementById("guestScore").innerHTML = guestPoints;
    scoreBalance();
}


function scoreBalance(){
    let homeScorex = document.getElementById("homeScore").innerHTML;
    homeScorex = homeScorex * 1;

    let guestScorex = document.getElementById("guestScore").innerHTML;
    guestScorex = guestScorex * 1;

    if (homeScorex > guestScorex){

        elementHomeHeader.classList.add("winner");
        elementGuestHeader.classList.remove("winner");


    } else if( homeScorex < guestScorex){
        elementGuestHeader.classList.add("winner");
        elementHomeHeader.classList.remove("winner");
    } else {
        elementHomeHeader.classList.remove("winner");
        elementGuestHeader.classList.remove("winner");
    }
}

// reset the game to 0 - 0 NEW GAME

function newGame(){

    homePoints = 0;
    guestPoints = 0;
    document.getElementById("homeScore").innerHTML = homePoints;
    document.getElementById("guestScore").innerHTML = guestPoints;

    elementHomeHeader.classList.remove("winner");
    elementGuestHeader.classList.remove("winner");
}


const startingMinutes = 12;
let time = startingMinutes * 60;

const countdownElement = doucment.getElementById("timer");

setInterval(countdownTimer, 1000){
    
    function countdownTimer(){
    
    const minutes = Math.floor( time / 60 );

    let seconds = time % 60;

    countdownElement.innerHTML = minutes + " : " + seconds;

    time--;
}
}