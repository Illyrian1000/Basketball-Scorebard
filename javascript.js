let homePoints = 0;
let guestPoints = 0;



// change score for home team

function homePlus(n){
    homePoints += (n * 1);
    document.getElementById("homeScore").innerHTML = homePoints;

    console.log(homePoints);
    console.log(guestPoints);
}


// change score for guest team


function guestPlus(n){
    guestPoints += (n * 1);
    document.getElementById("guestScore").innerHTML = guestPoints;
}


// reset the game to 0 - 0 NEW GAME

function newGame(){

    homePoints = 0;
    guestPoints = 0;
    document.getElementById("homeScore").innerHTML = homePoints;
    document.getElementById("guestScore").innerHTML = guestPoints;
}


    