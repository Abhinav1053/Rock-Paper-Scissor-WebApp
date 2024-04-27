let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usrScorebox=document.querySelector("#usrscore");
const compScorebox=document.querySelector("#compscore");
let resetBtn=document.querySelector("#reset");
 
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });

  const genComputerChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIndx=Math.floor(Math.random()*3);
    return options[randIndx]; //from options array return the index that is random.
 };
 const drawGame=()=>{
  console.log("GAME IS DRAW");
  msg.innerText="--DRAW--";
  msg.style.backgroundColor="grey";
 };
 showWinner=(userWin)=>{
  if(userWin){
    console.log("YOU WIN");
    userScore++;// userwin
    usrScorebox.innerText=userScore;
    msg.innerText="YOU WIN";
    msg.style.backgroundColor="green";
  }
  else{
    console.log("COMPUTER WIN");
    // user lose
    compScore++;
    compScorebox.innerText=compScore;
    msg.innerText="YOU LOSE";
    msg.style.backgroundColor="red";
  }
}

  const playGame = (userChoice) => {
  console.log("user choice=", userChoice);
  let comChoice = genComputerChoice();
  console.log("computer choice=", comChoice);

  if (userChoice === comChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // paper scissor
      userWin = comChoice === "paper" ? false : true; // if compcoice=paper then setn userwin false else true.
    } else if (userChoice === "paper") {
      //rock scissor
      userWin = comChoice === "rock" ? true : false;
    } else if (userChoice === "scissor") {
      //rock paper
      userWin = comChoice === "paper" ? false : true;
    }
    showWinner(userWin);
  }
};
resetBtn.addEventListener("click", function() {
  console.log("RESET");
  usrScorebox.innerText=0;
  compScorebox.innertText=0;
});
