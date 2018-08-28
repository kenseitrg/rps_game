const rules = {
    "rock": {
        "rock": 0,
        "paper": -1,
        "scissors": 1
    },
    "paper": {
        "rock": 1,
        "paper": 0,
        "scissors": -1
    },
    "scissors": {
        "rock": -1,
        "paper": 1,
        "scissors": 0
    }
};

let gameState = {
    "round": 0,
    "score": 0
};
function computerPlay() {
     const keys = ["rock", "paper", "scissors"];
     let index = Math.floor(Math.random()*3);
     return keys[index];
}
function updateGameState(result) {
    gameState.round += 1;
    gameState.score += result;
    document.getElementById("round").textContent =
        `Round ${gameState.round} of 5`;
    if (gameState.round == 5) {
        if (gameState.score == 0) {
            const message = `Game ended as a draw. 
                Final score ${gameState.score}`;
            document.getElementById("final-result").textContent = message;
        }
        else if (gameState.score < 0) {
            const message = `You lost this game. 
                Final score ${gameState.score}`;
            document.getElementById("final-result").textContent = message;
        }
        else {
            const message = `You won this game. 
                Final score ${gameState.score}`;
            document.getElementById("final-result").textContent = message;
        }
        gameState.round = 0;
        gameState.score = 0;
    }
    else {
        const message = `Current score is ${gameState.score}`;
        document.getElementById("final-result").textContent = message;
    }
    return 0;
}

function playRound(event) {
    const playerChoise = event.target.id.toLowerCase();
    const computerSelection = computerPlay();
    const messages = {"0": "It's a draw",
        "1": "You won:)",
        "-1": "You lost:("};
    if (!rules.hasOwnProperty(playerChoise)) {
        return -999;
    }
    const result = rules[playerChoise][computerSelection];
    const message = `${event.target.textContent} vs ${computerSelection} - 
        ${messages[result]}`;
    document.getElementById("round-result").textContent = message;
    updateGameState(result);
    return 0;
}

window.addEventListener("load", () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            playRound(e);
        });
    });
});