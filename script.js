function computerChoice() {
    var choice;
    var rand = Math.floor(Math.random() * 3);
    //console.log(rand)
    switch (rand) {
        case 0: choice = "rock"; break;
        case 1: choice = "paper"; break;
        case 2: choice = "scissors"; break;
    }
    return choice
}

function playerPrompt() {
    var valor;
    while (valor != "asda"){
    valor = prompt("rock, paper or scissors");
    valor = valor.toLowerCase();
        if (valor === "rock" || valor === "paper" || valor === "scissors") {
            return valor;
           
        }
    }


   

}

var playerChoice = playerPrompt();
var computerChoice = computerChoice();

function playGame(playerChoice, computerChoice) {

    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (playerChoice.toLowerCase() == "rock") {
        if (computerChoice == "rock") {
            return "Tie, rock and rock"
        }
        if (computerChoice == "paper") {
            return "You loose!, paper beats rock"
        }
        if (computerChoice == "scissors") {
            return "You won! rock beats scissors!"
        }

    }
    if (playerChoice.toLowerCase() == "paper") {
        if (computerChoice == "paper") {
            return "Tie, paper and paper"
        }
        if (computerChoice == "scissors") {
            return "You loose!, scissors beats paper"
        }
        if (computerChoice == "rock") {
            return "You won! paper beats rock!"
        }

    }
    if (playerChoice.toLowerCase() == "scissors") {
        if (computerChoice == "scissors") {
            return "Tie, scissors and scissors"
        }
        if (computerChoice == "rock") {
            return "You loose!, rock beats scissors"
        }
        if (computerChoice == "paper") {
            return "You won! scissors beats paper!"
        }

    }

}


console.log(playGame(playerChoice, computerChoice));