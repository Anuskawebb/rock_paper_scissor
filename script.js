let userScore =0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-Score");
const compScorepara = document.querySelector("#comp-Score");


const genCompChoice = () => {

    //rock,paper,scissors

    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];




};

const drawGame = () => {

    console.log("game was draw");  
    msg.innerText = "game was draw , play again."; 
    msg.style.backgroundColor = "grey";
};
const showWinner = (userWin) => {

    if(userWin){
        userScore++;
        userScorepara.innerText = userScore ;
        console.log("you win");
        msg.innerText = "You win";
        msg.style.backgroundColor = "green";
        
    } else{
        compScore++;
        compScorepara.innerText = compScore ;
        console.log("computer win");
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {

    console.log("user choice =",userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice =",compChoice);

    if(userChoice === compChoice) {
        //Draw game
        drawGame();
    } else{

        let userWin = true;
        if (userChoice === "rock"){
            //scissors , papers
            userWin = compChoice === "paper"? false :true;
        }else if (userChoice === "paper"){
            //rock , scissors
            userWin =  compChoice === "scissors" ? false : true;

        }else{
            //paper , rock
            userWin =  compChoice === "rock"? false : true;
        }

        showWinner(userWin);
    }



};


choices.forEach(choice => {
  

    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");

        playGame(userChoice);


    });
    
});
