
let modal = document.getElementById("myModal");
let myButton = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

const choises = ["rock" , "paper" , "scissor"];
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const resultDisplay = document.getElementById("result");
let playerScore = 0;
let computerScore = 0;

 function playGame(playerChoise) {
    const computerChoise = choises[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoise === computerChoise) {
        result = "IT's a TIE!"
    }
    else {
        switch(playerChoise){
            case "rock":
                result = (computerChoise === "scissor") ? "YOU WIN!" : "YOU LOSE!";
                 break;
            case "paper":
                result = (computerChoise === "rock") ? "YOU WIN!" : "YOU LOSE!";
            case "scissor":
                result = (computerChoise === "paper") ? "YOU WIN!" : "YOU LOSE!";
        }
    }

    resultDisplay.textContent = result;

    switch(result){
        case "YOU WIN!":
            playerScore++;
            playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
            break;
        case "YOU LOSE!":
            computerScore++;
            computerScoreDisplay.textContent = `Computer Score: ${computerScore}` ;
            break;
    }


}




myButton.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event){
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    
