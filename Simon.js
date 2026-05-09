
let gamSeq=[];
let userSeq=[];

let btns=["pink","tale","green","purple1"];


let started=false;
let level=0;

let h4=document.querySelector("h4");


document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Starts.")
        started=true ;  

        levelUp();                 
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
    }

function levelUp(){
    userSeq=[];
    level++;
    h4.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gamSeq.push(randColor);
    console.log(gamSeq);


    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    btnFlash(randBtn);
    
}

    function checkAns(idx){
    if(userSeq[idx] === gamSeq[idx]){
        if(userSeq.length == gamSeq.length){
            setTimeout(levelUp,1000);
        }
    
    }

    else{
        h4.innerHTML=`Game Over! Your Score was <b> ${level} </b> .<br> Press any key to Start the New Game. `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
 reset();
       
    }
    

    
} 



function btnPress(){
    console.log("Btn Pressed.")
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}



function reset(){
    started=false;
    gamSeq=[];
    userSeq=[];
    level=0;
}

