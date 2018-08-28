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
function computerPlay() {
     const keys = ["rock", "paper", "scissors"];
     let index = Math.floor(Math.random()*3);
     return keys[index];
}

function playRound(playerSelection, computerSelection) {
    const playerChoise = playerSelection.toLowerCase();
    if (!rules.hasOwnProperty(playerChoise)) {
        console.log("Invalid choise");
        return -999;
    }
    return rules[playerChoise][computerSelection];
}
function game() {
    const messages = {
        "0": "Draw",
        "1": "Win",
        "-1": "Loose"
    }
    let resultArr = [0,0,0,0,0];
    for (let i=0; i < resultArr.length; i++) {
        let player = window.prompt("Please select rock/paper/scissors", "");
        let result = playRound(player, computerPlay());
        if (result == -999) {
            i--;
        }
        else {
            console.log(messages[result]);
            resultArr[i] = result;
        }
    }
    const finalScore = resultArr.reduce((cur, next) => {
        return cur + next;
    });
    if (finalScore > 0) {
        alert("You won");
    }
    else if (finalScore < 0) {
        alert("You loose");
    }
    else {
        alert("Unlikely draw");
    }
    return finalScore;
}

console.log(game());