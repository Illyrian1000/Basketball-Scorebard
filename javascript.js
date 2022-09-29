let homePoints = 0;
let guestPoints = 0;

let elementHomeHeader = document.getElementById("homeHeader");
let elementGuestHeader = document.getElementById("guestHeader");




// change score for home team

function homePlus(n) {
    homePoints += (n * 1);
    document.getElementById("homeScore").innerHTML = homePoints;
    scoreBalance();
}


// change score for guest team


function guestPlus(n) {
    guestPoints += (n * 1);
    document.getElementById("guestScore").innerHTML = guestPoints;
    scoreBalance();
}


function scoreBalance() {
    let homeScorex = document.getElementById("homeScore").innerHTML;
    homeScorex = homeScorex * 1;

    let guestScorex = document.getElementById("guestScore").innerHTML;
    guestScorex = guestScorex * 1;

    if (homeScorex > guestScorex) {

        elementHomeHeader.classList.add("winner");
        elementGuestHeader.classList.remove("winner");


    } else if (homeScorex < guestScorex) {
        elementGuestHeader.classList.add("winner");
        elementHomeHeader.classList.remove("winner");
    } else {
        elementHomeHeader.classList.remove("winner");
        elementGuestHeader.classList.remove("winner");
    }
}

// reset the game to 0 - 0 NEW GAME

function newGame() {

    homePoints = 0;
    guestPoints = 0;
    document.getElementById("homeScore").innerHTML = homePoints;
    document.getElementById("guestScore").innerHTML = guestPoints;

    elementHomeHeader.classList.remove("winner");
    elementGuestHeader.classList.remove("winner");
}




const initialTime = 12;
let totalTime = initialTime * 60;

let timerElement = document.getElementById("timer");

function test1() {
    const min = Math.floor(totalTime / 60, 10);
    let sec = totalTime % 60;

    if (sec < 10) {
        sec = "0" + sec;
    }

    var exactTime = min + " : " + sec;

    timerElement.innerHTML = exactTime;

    totalTime--;
}


// var myInterval = setInterval(test1, 1000);

// function test2() {
//     document.getElementById("startGame").style.display = "none";
//     document.getElementById("stopGame").style.display = "flex";
// }

// function test3() {
//     clearInterval(myInterval);
// }