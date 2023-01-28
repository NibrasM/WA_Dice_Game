
        let limit = 100;

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


        const start = document.getElementById("start");
        start.addEventListener("click", (event) => {
            console.log("PPPPPP");
            event.preventDefault();
            const limit_val = document.getElementById("limit");
            limit = limit_val.value;
            console.log(limit + " limit");


            randomPlayer = random_player();
            console.log(randomPlayer);

        });


        const rollConst = document.getElementById("roll");
        rollConst.addEventListener("click", (event) => {
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

        const holdConst = document.getElementById("hold");
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
            let count=0; 

            if (dice1 === 6 && dice2 === 6) {
                hold();
                return 0;
            }

            currentScore += dice1+dice2;
            console.log("g " + currentScore);

            return currentScore;

        }


        function hold() {
            if (randomPlayer === 1) {
                global1 += score1;
                score1 = 0;

                const currentScore1 = document.getElementById("current-score1");
                currentScore1.innerHTML = score1;

                const globalScore1 = document.getElementById("global-score1");
                globalScore1.innerHTML = global1;
                if (global1 > limit) {
                    console.log("First1");
                    console.log("player one lost, the other win");
                    gameOver = true;
                    return;
                }
                else if (global1 === limit) {
                    console.log("First2");

                    console.log("player one win, the other lost");
                    gameOver = true;
                    return;
                }

                console.log("First3");

                randomPlayer = 2;
            }

            else {
                global2 += score2;
                score2 = 0;
                const currentScore2 = document.getElementById("current-score2");
                currentScore2.innerHTML = score2;

                const globalScore2 = document.getElementById("global-score2");
                globalScore2.innerHTML = global2;

                if (global2 > limit) {
                    console.log("second1");
                    console.log("player two lost, the other win");
                    gameOver = true;
                    return;
                }
                else if (global2 === limit) {
                    console.log("second2");

                    console.log("player two win, the other lost");
                    gameOver = true;
                    return;
                }
                console.log("second3");
                randomPlayer = 1;
            }


        }