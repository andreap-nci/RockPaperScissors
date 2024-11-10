
// rock     0
// paper    1
// scissors 2


// function that creates CPU choice
function randomNumberGenerator(){
    let cpuChoice = Math.floor(Math.random() * 2);
    return cpuChoice;
}


//game logic
function game(userChoice){
    console.log("the user choose "+ userChoice);
    cpuChoice = randomNumberGenerator();
    let outcome;

    if(userChoice==0){
        if(cpuChoice==0){
            outcome = "It's a tie";
        }
        else if(cpuChoice==1){
            outcome ="You lost";
        }
        else{
            outcome ="You won!";
        }
    }
    else if(userChoice==1){
        if(cpuChoice==0){
            outcome ="You won!";
        }
        else if(cpuChoice==1){
            outcome ="It's a tie";
        }
        else{
            outcome ="You lost";
        }
    }
    else if(userChoice==2){
        if(cpuChoice==0){
            outcome ="You lost";
        }
        else if(cpuChoice==1){
            outcome ="You won!";
        }
        else{
            outcome ="It's a tie";
        }
    }
    else{
        console.log("invlid choice");
    }
    document.getElementById("result1").innerHTML=outcome;

    //change element color based on outcome
    if(outcome=="You won!"){
        document.getElementById("result1").style.color = "green";
    }
    else if (outcome=="You lost"){
        document.getElementById("result1").style.color = "red";
    }
    else{
        document.getElementById("result1").style.color = "white";
    }
    computerChoiceString(cpuChoice);
}


//function to print what the CPU choose
function computerChoiceString(cpuChoice){
    let strCPUchoice;
    if(cpuChoice==0){
        strCPUchoice="The CPU choose ROCK";
    }
    else if(cpuChoice==1){
        strCPUchoice="The CPU choose PAPER";
    }
    else if(cpuChoice==2){
        strCPUchoice="The CPU choose SCISSORS";
    }
    else{
        console.log("CPU choice out of range");
    }
    document.getElementById("result2").innerHTML=strCPUchoice;

}