let useScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const score1 = document.querySelector("#user_score");
const score2 = document.querySelector("#comp_score");

const genCompChoice =() =>{
    const options = ["rock","paper","sicssor"];
    const num = Math.floor(Math.random() *3);
    return options[num];
}



const playgame = (userChoice) =>{
    const compChoice = genCompChoice();
    // console.log(userChoice,compChoice);
    if(userChoice === compChoice){
        // console.log("Game was Draw");
        msg.innerText = "Match was Draw, Play again";
    msg.style.backgroundColor ="#081b31";

    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
                if(compChoice === "paper"){
                    userWin =false;
                }
                else{
                    userWin =true;
                }
        }
        if(userChoice === "paper"){
            if(compChoice === "sicssor"){
                userWin =false;
            }
            else{
                userWin =true;
            }
    }
    if(userChoice === "sicssor"){
        if(compChoice === "rock"){
            userWin =false;
        }
        else{
            userWin =true;
        }
}
showWin(userWin,userChoice,compChoice);
    }
}
const showWin = (userWin,userChoice,compChoice) =>{
    if(userWin){
        // console.log("user Win");
        useScore++;
        msg.innerText = `You Win , your ${userChoice} beats ${compChoice}`;
        score1.innerText = useScore;
        msg.style.backgroundColor ="green";
    }
    else{
        // console.log("user Lose");
        compScore++;
        msg.innerText =`You Lose ${compChoice} beats your ${userChoice} `;
        score2.innerText = compScore;
        msg.style.backgroundColor ="red";
    }
}
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playgame(userChoice);

    })
})