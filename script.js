let youScore = 0;
let compScore = 0;
const msg = document.querySelector(".msgContainer");

const options = document.querySelectorAll(".option");

const genCompChoice = () => {
    const vikalp = ["rock", "paper", "scissor"];
    const vikalpIdx = Math.floor(Math.random() * 3);
    return vikalp[vikalpIdx];
}

const gameDraw = () => {
    console.log("The Game is Draw");
    msg.innerText = "The Game is Draw! Play again.";
    msg.style.backgroundColor = "black";
    msg.style.color = "white";
}

const compWon = () => {
    console.log("You Lost");
}

const userWon = () => {
    console.log("You Won");
}

const showWinner = () => {
    if (userWon) {
        youScore++;
        msg.innerText = `You Win! Your ${userChose} beats ${compChose}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "black";
    } else {
        compScore++;
        msg.innerText = `You Lost! ${compChose} beats your ${userChose}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "black"; 
    }
}

const gamePlay = (userChose) => {
    console.log("You chose", userChose);
    const compChose = genCompChoice();
    console.log("Comp chose", compChose);

    if (userChose === compChose) {
        return gameDraw();
    } else if (userChose === "rock" && compChose === "paper") {
        return compWon();
    } else if (userChose === "rock" && compChose === "scissor") {
        return userWon();
    } else if (userChose === "paper" && compChose === "rock") {
        return userWon();
    } else if (userChose === "paper" && compChose === "scissor") {
        return compWon();
    } else if (userChose === "scissor" && compChose === "rock") {
        return compWon();
    } else if (userChose === "scissor" && compChose === "paper") {
        return userWon();
    }
}

options.forEach((option) => {
    option.addEventListener("click", () => {
        const userChose = option.getAttribute("id");
        gamePlay(userChose);
    })
})