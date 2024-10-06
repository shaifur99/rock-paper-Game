let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePera=document.querySelector("#user-score");
const compScorePera=document.querySelector("#computer-score")

const gencompChoice=()=>{
    const option=["rock","paper","scisssore"];
   const randomIndex= Math.floor(Math.random()*3);
   return option[randomIndex];
}

const drawGame=()=>{
    msg.innerText="game was draw";
    msg.style.backgroundColor="blue";
}
const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++;
        userScorePera.innerText=userScore;
        console.log("You win");
        msg.innerText=`you win yours ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";
    }else{
        compScore++;
        compScorePera.innerText=compScore;
        console.log("You loss");
        msg.innerText=`You loss yours ${userChoice} can not beats ${compChoice}`;
        msg.style.backgroundColor="Red";
    }

}
const playGame=(userChoice)=>{
const compChoice=gencompChoice();

if(userChoice===compChoice){
    drawGame();
}else{
    let userwin=true;
    if(userChoice==="rock"){
        userwin=compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        userwin=compChoice==="scissors"?false:true;
    }else{
        userwin=compChoice==="rock"?false:true;
    }
    showWinner(userwin,userChoice,compChoice);

}

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice=choice.getAttribute("id");
      playGame(userChoice);
    });
});
