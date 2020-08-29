const game = () => {
    let playerscore = 0;
    let computerscore = 0;

    const begin = () => {
        const lets_begin = document.querySelector(".begin");
        const introppart = document.querySelector(".intro");
        const matchpart = document.querySelector(".match");
        const score = document.querySelector(".score");

        lets_begin.addEventListener("click",()=>{
            introppart.classList.add("fadeout");
            matchpart.classList.add("fadein");
            score.classList.add("fadein");
        });
    }

    const match = () => {
        const options = document.querySelectorAll(".options button");
        const playerhand = document.querySelector(".playerhand");
        const computerhand = document.querySelector(".computerhand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function(){
                this.style.animation = "";
            });
        })

        //computer hand selection
        const computeroptions = ["rock", "paper", "scissors"];
        options.forEach(option => {
            option.addEventListener("click", function () {
                playerhand.src = `./rock.png`;
                computerhand.src = `./rock.png`;

                const computernumber = Math.floor(Math.random()*3);
                const computerchoice = computeroptions[computernumber];
                
                setTimeout(()=>{
                    comparehands(this.textContent,computerchoice);
                
                changescore();
                playerhand.src = `./${this.textContent}.png`;
                computerhand.src = `./${computerchoice}.png`;
                },2000);

                playerhand.style.animation = "shakeplayer 2s ease";
                computerhand.style.animation = "shakecomputer 2s ease";
            });
        });  
    };



    const changescore = () => {
        const result = document.querySelector(".result");
        if(playerscore==10 || computerscore==10)
        {
            const winner = document.querySelector(".winner");
            const hands = document.querySelector(".hands");
            const options = document.querySelector(".options");

            hands.classList.add("fadeout");
            winner.classList.add("fadeout");
            options.classList.add("fadeout");

            if(playerscore==10)
            {
                result.textContent = "You Won!!";
            }
            else
            {
                result.textContent = "You Lose!!";
            }
        }
        document.querySelector(".player_score p").innerHTML = `${playerscore}`;
        document.querySelector(".computer_score p").innerHTML = `${computerscore}`;
    }

    const comparehands = (playerchoice,computerchoice)=>{
        const winner = document.querySelector(".winner");
        
        if(playerchoice===computerchoice)
        {
            winner.textContent = "Its a tie!!"
            return;
        }
        if(playerchoice==='rock')
        {
            if(computerchoice==='scissors')
            {
                winner.textContent="You win!!";
                playerscore++;
                return;
            }
            else
            {
                winner.textContent="You Lose!!";
                computerscore++;
                return;
            }
        }
        if(playerchoice==='paper')
        {
            if(computerchoice==='rock')
            {
                winner.textContent="You win!!";
                playerscore++;
                return;
            }
            else
            {
                winner.textContent="You Lose!!";
                computerscore++;
                return;
            }
        }
        if(playerchoice==='scissors')
        {
            if(computerchoice==='paper')
            {
                winner.textContent="You win!!";
                playerscore++;
                return;
            }
            else
            {
                winner.textContent="You Lose!!";
                computerscore++;
                return;
            }
        }
    }


    begin();
    match();
}

game();