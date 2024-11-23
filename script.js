
    function getComputerChoice() {
        const randomNum = Math.floor(Math.random()*3);
        if (randomNum === 0){
            return "rock";
        } else if (randomNum === 1){
            return "paper";
        };
        return "scissors"    
    }


    function getHumanChoice(round){
        return prompt("Round " + round + ": Please enter your choice - rock, paper, or scissors", "scissors")
    }


    function playRound(humanChoice, computerChoice){

        if (humanChoice === "rock"){
            if (computerChoice === "rock"){
                alert("Draw!")
            } else if (computerChoice === "paper"){
                alert("You Lose!")
                computerScore++
            } else if (computerChoice === "scissors"){
                alert("You Won!")
                humanScore++;
            } 
        }
        else if (humanChoice === "paper"){
            if (computerChoice === "rock"){
                alert("You won!")
                humanScore++
            } else if (computerChoice === "paper"){
                alert("Draw!")
                
            } else if (computerChoice === "scissors"){
                alert("You Lose!")
                computerScore++
            } 
        }
        else if (humanChoice === "scissors"){
            if (computerChoice === "rock"){
                alert("You Lose!")
                computerScore++;
            } else if (computerChoice === "paper"){
                alert("You Won!")
                humanScore++;
            } else if (computerChoice === "scissors"){
                alert("Draw!")
                
            } 
        }



        if (humanScore === 5 || computerScore === 5){
            if (humanScore > computerScore){
                alert("Congratulations Human, You Won!")
            } else {
                alert("Sorry Human, but computer won!")
            }

            humanScore = 0;
            computerScore = 0;
        }
        
        humanResult.textContent = humanScore;
        computerResult.textContent = computerScore;
    }

    let humanScore = 0;
    let computerScore = 0;

    const humanResult = document.querySelector("#human");
    const computerResult = document.querySelector("#computer");



    const rockBtn = document.createElement("button")
    const paperBtn = document.createElement("button")
    const scissorsBtn = document.createElement("button")

    rockBtn.addEventListener("click", () => {
        
        playRound("rock", getComputerChoice())
    })

    paperBtn.addEventListener("click", () => {

        playRound("paper", getComputerChoice())
    })

    scissorsBtn.addEventListener("click", () => {

        playRound("scissors", getComputerChoice())
    })

    const selections = document.querySelector("#selections")

    rockBtn.textContent ="Rock"
    paperBtn.textContent = "Paper"
    scissorsBtn.textContent = "Scissors"

    selections.appendChild(rockBtn)
    selections.appendChild(paperBtn)
    selections.appendChild(scissorsBtn)


        // playRound(humanSelection,computerSelection)
