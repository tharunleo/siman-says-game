let gameseq=[]
let userseq=[]

let btns =["yellow","red","purple","green"]

let started =false;
let level =0;
let h2= document.querySelector("h2");


document .addEventListener("keypress", function(){
    if(started == false){
        console.log ("game started");
        started == true;

        levelup();
    }
});


function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },500) ;
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500) ;
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
}


function checkAns(idx){
    // console.log("current level",level);
  //  let idx = level-1;
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
           setTimeout(levelup(),1000);
        }
    }
    else{
        h2.innerHTML =`Game over, your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";

        },150);
        reset();
    }
}


function btnPress(){
    console.log
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started ==   false;
    gameseq =[];
    userseq =[];
    level =0;
}
    