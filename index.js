let userscore=0;
let compscore=0;
const choices= document.querySelectorAll(".choice");
const msgcontainer=document.querySelector(".msg-container");
const userScorePara=document.querySelector(".user-score");
const compScorePara=document.querySelector(".comp-score")

const genCompchoice=()=>{
    const options = ["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}
const draw=()=>{
  console.log("the game is draw."); 
  msgcontainer.innerText=`the game is draw.play again!`;

}
const showWinner=(userwin,userchoice,compchoice)=>{
if(userwin){
 userscore++;
 userScorePara.innerText=userscore;
  msgcontainer.innerText=`you win.the ${userchoice} beats ${compchoice}`;
  msgcontainer.style.backgroundColor="green";

}else{
  compscore++;
  compScorePara.innerText=compscore;
  msgcontainer.innerText=`you loose.the ${compchoice} beats ${userchoice}`;
msgcontainer.style.backgroundColor="red";
}
}
const playgame=(userchoice)=>{
    //generete computer choice
    const compchoice= genCompchoice();

  if(userchoice===compchoice){
     draw();//draw
  }else{
    let userwin=true;
if(userchoice==="paper"){
  //scissor , rock - comp
userwin=compchoice==="scissor"?true:false;
}else if(userchoice==="rock"){
    // paper , scissor <-comp
userwin=compchoice==="paper"?false:true;
  }else{
    //paper, rock <- comp
    userwin=compchoice==="rock"?false:true;
     }
    showWinner(userwin,userchoice,compchoice);
  }
    }

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("Id");
        playgame(userchoice);
    });
});