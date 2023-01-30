
let limit = 0;

let number_of_players = 2;

let player1 = 1;
let player2 = 2;

let global1 = 0;
let global2 = 0;

var score1 = 0;
var score2 = 0;

let dice1 = 0;
let dice2 = 0;

let randomPlayer = 0;
let gameOver = false;

const leftPlayer= document.getElementById("left");
const rightPlayer= document.getElementById("right");
const btnSection=document.getElementById("btns");
const holdConst = document.getElementById("hold");
holdConst.disabled = 'true';

limit = sessionStorage.getItem("limit");
console.log(limit + " limit");
randomPlayer = random_player();
if(randomPlayer ===1 ){
    leftPlayer.style.backgroundColor="rgb(214, 168, 187)";
    rightPlayer.style.backgroundColor="rgb(180, 113, 152)";
   btnSection.style.background=" linear-gradient(90deg, rgb(214, 168, 187) 50%, rgb(180, 113, 152) 50% )";
}
else if(randomPlayer ===2){
    rightPlayer.style.backgroundColor="rgb(214, 168, 187)";
    leftPlayer.style.backgroundColor="rgb(180, 113, 152)";
    btnSection.style.background=" linear-gradient(90deg, rgb(180, 113, 152) 50%, rgb(214, 168, 187) 50% )";
}
console.log(randomPlayer);

const newGame = document.getElementById("new-game");
newGame.addEventListener("click", (event) => {
    event.preventDefault();
    window.location = "./index.html";
});



const rollConst = document.getElementById("roll");
rollConst.addEventListener("click", (event) => {
    holdConst.disabled = false;

    event.preventDefault();
    if (randomPlayer === 1) {
        const currentScore1 = document.getElementById("current-score1");
        score1 = roll(score1, limit);
        currentScore1.innerHTML = score1;
        console.log(score1 + " score1 after ");
    }

    else {
       
        const currentScore2 = document.getElementById("current-score2");
        score2 = roll(score2, limit);
        currentScore2.innerHTML = score2;
        console.log(score2 + " score2 after ");
    }

});

holdConst.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("We are here on hold ");
    hold();
});




//let winner =

function random_player() {
    return Math.floor(Math.random() * (number_of_players - 1 + 1)) + 1;
}

function roll(currentScore, limit) {

    dice1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    dice2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    console.log(dice1);
    console.log(dice2);
    const dice1Img = document.getElementById("dice1");
    const dice2Img = document.getElementById("dice2");

    if (dice1 === 1) {
        dice1Img.src = "./imgs/dice-1.png";
    }
    else if (dice1 === 2) {
        dice1Img.src = "./imgs/dice-2.png";
    }
    else if (dice1 === 3) {
        dice1Img.src = "./imgs/dice-3.png";
    }
    else if (dice1 === 4) {
        dice1Img.src = "./imgs/dice-4.png";
    }
    else if (dice1 === 5) {
        dice1Img.src = "./imgs/dice-5.png";
    }
    else if (dice1 === 6) {
        dice1Img.src = "./imgs/dice-6.png";
    }


    if (dice2 === 1) {
        dice2Img.src = "./imgs/dice-1.png";
    }
    else if (dice2 === 2) {
        dice2Img.src = "./imgs/dice-2.png";
    }
    else if (dice2 === 3) {
        dice2Img.src = "./imgs/dice-3.png";
    }
    else if (dice2 === 4) {
        dice2Img.src = "./imgs/dice-4.png";
    }
    else if (dice2 === 5) {
        dice2Img.src = "./imgs/dice-5.png";
    }
    else if (dice2 === 6) {
        dice2Img.src = "./imgs/dice-6.png";
    }
    let count = 0;

    if (dice1 === 6 && dice2 === 6) {
        hold();
        return 0;
    }

    currentScore += dice1 + dice2;
    console.log("g " + currentScore);

    return currentScore;

}


function hold() {
    if (randomPlayer === 1) {
        global1 += score1;
    //  global1=limit;
        score1 = 0;
        rightPlayer.style.backgroundColor="rgb(214, 168, 187)";
        leftPlayer.style.backgroundColor="rgb(180, 113, 152)";
        btnSection.style.background=" linear-gradient(90deg, rgb(180, 113, 152) 50%, rgb(214, 168, 187) 50% )";
    
        const currentScore1 = document.getElementById("current-score1");
        currentScore1.innerHTML = score1;

        const globalScore1 = document.getElementById("global-score1");
        globalScore1.innerHTML = global1;
        if (global1 > limit) {
            console.log("First1");
            console.log("player one lost, the other win");
            leftPlayer.style.backgroundColor="rgb(214, 168, 187)";
            rightPlayer.style.backgroundColor="rgb(104, 104, 104)";
            const res1=document.getElementById("result1");
            res1.innerText="Passed the target score"
            const res2=document.getElementById("result2");
            res2.innerHTML="You Win!";
            rightPlayer.style.color="rgb(162, 32, 72)";
            btnSection.style.background=" linear-gradient(90deg, rgb(214, 168, 187) 50%, rgb(104, 104, 104) 50% )";
        
            rollConst.disabled=true;
            holdConst.disabled=true;
            gameOver = true;
            return;
        }
        else if (global1 === limit) {
            console.log("First2");
            rightPlayer.style.backgroundColor="rgb(214, 168, 187)";
            leftPlayer.style.backgroundColor="rgb(104, 104, 104)";
            const res2=document.getElementById("result2");
            res2.innerText="You Lost!"
            const res1=document.getElementById("result1");
            res1.innerHTML="You Win!";
            leftPlayer.style.color="rgb(162, 32, 72)";
            btnSection.style.background=" linear-gradient(90deg,rgb(104, 104, 104) 50%, rgb(214, 168, 187) 50%)";
            rollConst.disabled=true;
            holdConst.disabled=true;
            console.log("player one win, the other lost");
            gameOver = true;
            return;
        }

        console.log("First3");

        randomPlayer = 2;
    }

    else {
      global2 += score2;
    // global2=limit;
        score2 = 0;
        leftPlayer.style.backgroundColor="rgb(214, 168, 187)";
        rightPlayer.style.backgroundColor="rgb(180, 113, 152)";
       btnSection.style.background=" linear-gradient(90deg, rgb(214, 168, 187) 50%, rgb(180, 113, 152) 50% )";
    
        const currentScore2 = document.getElementById("current-score2");
        currentScore2.innerHTML = score2;

        const globalScore2 = document.getElementById("global-score2");
        globalScore2.innerHTML = global2;

        if (global2 > limit) {
            rightPlayer.style.backgroundColor="rgb(214, 168, 187)";
            leftPlayer.style.backgroundColor="rgb(104, 104, 104)";
            const res2=document.getElementById("result2");
            res2.innerText="Passed the target score"
            const res1=document.getElementById("result1");
            res1.innerHTML="You Win!";
            leftPlayer.style.color="rgb(162, 32, 72)";
            btnSection.style.background=" linear-gradient(90deg,rgb(104, 104, 104) 50%, rgb(214, 168, 187) 50%)";
            rollConst.disabled=true;
            holdConst.disabled=true;
            console.log("second1");
            console.log("player two lost, the other win");
            gameOver = true;
            return;
        }
        else if (global2 == limit) {
            console.log("second2");
            leftPlayer.style.backgroundColor="rgb(214, 168, 187)";
            rightPlayer.style.backgroundColor="rgb(104, 104, 104)";
            const res1=document.getElementById("result1");
            res1.innerText="You Lost!"
            const res2=document.getElementById("result2");
            res2.innerHTML="You Win!";
            rightPlayer.style.color="rgb(162, 32, 72)";
            btnSection.style.background=" linear-gradient(90deg, rgb(214, 168, 187) 50%, rgb(104, 104, 104) 50% )";
            rollConst.disabled=true;
            holdConst.disabled=true;
            console.log("player two win, the other lost");
            gameOver = true;
            return;
        }
        console.log("second3");
        randomPlayer = 1;
    }


}