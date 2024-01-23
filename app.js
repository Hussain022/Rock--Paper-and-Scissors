let arr = ["rock", "paper", "scissors"]

function paper(){
    let computer = arr[Math.floor(Math.random()*3)]
    document.getElementById("item").innerHTML = ""
    document.getElementById("ans").innerHTML = "You selected: paper" + "<br>Computer selected: " + computer;
    
    if(computer == "scissors"){
        document.getElementById("feed").innerHTML = "You Lose.  <br> <a href='index.html'>Try Again</a>" 
    }else if(computer == "rock"){
        document.getElementById("feed").innerHTML = "You Win!  <br> <a href='index.html'>Play Again</a>" 
    }else{
        document.getElementById("feed").innerHTML = "Draw  <br> <a href='index.html'>Play Again</a>" 
    }
}

function rock(){
    let computer = arr[Math.floor(Math.random()*3)]
    document.getElementById("item").innerHTML = ""
    document.getElementById("ans").innerHTML = "You selected: rock" + "<br>Computer selected: " + computer;

    if(computer == "paper"){
        document.getElementById("feed").innerHTML = "You Lose.  <br> <a href='index.html'>Try Again</a>" 
    }else if(computer == "scissors"){
        document.getElementById("feed").innerHTML = "You Win!  <br> <a href='index.html'>Play Again</a>" 
    }else{
        document.getElementById("feed").innerHTML = "Draw  <br> <a href='index.html'>Play Again</a>" 
    }
}

function scissors(){
    let computer = arr[Math.floor(Math.random()*3)]
    document.getElementById("item").innerHTML = ""
    document.getElementById("ans").innerHTML = "You selected: scissors" + "<br>Computer selected: " + computer;

    if(computer == "rock"){
        document.getElementById("feed").innerHTML = "You Lose.  <br> <a href='index.html'>Try Again</a>" 
    }else if(computer == "paper"){
        document.getElementById("feed").innerHTML = "You Win!  <br> <a href='index.html'>Play Again</a>" 
    }else{
        document.getElementById("feed").innerHTML = "Draw  <br> <a href='index.html'>Play Again</a>" 
    }
}