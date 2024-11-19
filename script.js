function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let draw = 0
    let invalidInput = 0


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
                draw++
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
                draw++
            } else if (computerChoice === "scissors"){
                alert("You Lose!")
                computerScore++
            } 
        }
        else if (humanChoice === "scissors"){
            if (computerChoice === "rock"){
                alert("You Lose!")
                computerScore++
            } else if (computerChoice === "paper"){
                alert("You Won!")
                humanScore++;
            } else if (computerChoice === "scissors"){
                alert("Draw!")
                draw++
            } 
        }
        else {
            alert("Invalid input. No play for this round")
            invalidInput++
        }
    }


    for (let i = 1; i <= 5; i++){
        const humanSelection = getHumanChoice(i)
        const computerSelection = getComputerChoice()

        playRound(humanSelection,computerSelection)
    }
    if (humanScore > computerScore){
        console.log("Congratulations human, You won!")
    } 
    else if (humanScore < computerScore) {
        console.log("Unfortunately human, You lost!")

    }
    else  {
        console.log("You both played good, It's a draw")
    }
    console.log("Your score", humanScore)
    console.log("Computer score", computerScore)
    console.log("Draws", draw) 
    console.log("Invalid inputs", invalidInput) 
}


playGame();