let youScore = 0;
let compScore = 0;

const msg = document.querySelector(".msgContainer");
const options = document.querySelectorAll(".option");

const youScorePara = document.querySelector("#youScore");
const compScorePara = document.querySelector("#compScore");

const newGameBtn = document.querySelector("#newGame");

const genCompChoice = () => {
    const vikalp = ["rock", "paper", "scissor"];
    const vikalpIdx = Math.floor(Math.random() * 3);
    return vikalp[vikalpIdx];
}

const gameDraw = () => {
    msg.innerText = "The Game is Draw! Play again.";
    msg.style.backgroundColor = "black";
    msg.style.color = "white";
    msg.style.border = "5px outset black"
}

const showWinner = (userWon, userChose, compChose) => {
    if (userWon) {
        youScore++;
        youScorePara.innerText = youScore;
        msg.innerText = `You Win! Your ${userChose} beats ${compChose}`;
        msg.style.backgroundColor = "#72b01d";
        msg.style.color = "black";
        msg.style.border = "5px outset #72b01d"
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChose} beats your ${userChose}`;
        msg.style.backgroundColor = "#f25757";
        msg.style.color = "black"; 
        msg.style.border = "5px outset #f25757"
    }
}

const gamePlay = (userChose) => {
    const compChose = genCompChoice();

    if (userChose === compChose) {
        gameDraw();
    } else {
        let userWon = true;
        if (userChose === "rock") {
            userWon = compChose === "paper" ? false : true;
        } else if (userChose === "paper") {
            userWon = compChose === "scissor" ? false : true;
        } else {
            userWon = compChose === "rock" ? false : true;
        }
        showWinner(userWon, userChose, compChose);
    }
}

options.forEach((option) => {
    option.addEventListener("click", () => {
        const userChose = option.getAttribute("id");
        gamePlay(userChose);
    })
})

newGameBtn.addEventListener("click", () => {
    youScore = 0;
    compScore = 0;
    youScorePara.innerText = youScore; // Reset the score display
    compScorePara.innerText = compScore; // Reset the score display
    msg.textContent = "Choose your Option"; // reset message
    msg.style.backgroundColor = "pink";
    msg.style.color = "black";
    msg.style.border = "5px outset pink"
});