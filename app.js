function rockfunction()
{
var hand = ["rock","paper","scissors"];
var num = Math.floor(Math.random()*3);
updateScore("rock",hand[num]);
const playerHand = document.querySelector(".playerHand");
playerHand.src = "./assets/rock.png";
const computerHand = document.querySelector(".computerHand");
computerHand.src = "./assets/"+hand[num]+".png";
}

function paperfunction()
{
var hand = [rock,paper,scissors];
var num = Math.floor(Math.random()*3);
updateScore(paper,hand[num]);
const playerHand = document.querySelector(.playerHand);
document.getElementById(a).src = ./assets/paper.png;
const computerHand = document.querySelector(.computerHand);
computerHand.src = ./assets/+hand[num]+.png;

}

function scissorfunction()
{
var hand = [rock,paper,scissors];
var num = Math.floor(Math.random()*3);
updateScore(scissors,hand[num]);
const playerHand = document.querySelector(.playerHand);
playerHand.src =./assets/scissors.png;
const computerHand = document.querySelector(.computerHand);
computerHand.src = ./assets/+hand[num]+.png;

}
var pscore = 0;
var cscore = 0;
function updateScore(player, computer)
{

console.log(player);
console.log(computer);
if(player === computer)
{
document.getElementById(choose).innerHTML=It is a tie bruh;
return;
}
else if(player === rock && computer === scissors)
{
document.getElementById(choose).innerHTML=Player slays;
pscore++;
document.getElementById(pscore).innerHTML = pscore;
return;
}
else if(player === scissors && computer === rock)
{
document.getElementById(choose).innerHTML=Computer slays;
cscore++;
document.getElementById(cscore).innerHTML = cscore;
return;
}
else if(player === rock && computer === paper)
{
document.getElementById(choose).innerHTML=Computer slays;
cscore++;
document.getElementById(cscore).innerHTML = cscore;
return;
}
else if(player === paper && computer === rock)
{
document.getElementById(choose).innerHTML=Player slays;
pscore++;
document.getElementById(pscore).innerHTML = pscore;
return; 
}
else if(player === paper && computer === scissors)
{
document.getElementById(choose).innerHTML=Computer slays;
cscore++;
document.getElementById(cscore).innerHTML = cscore;
return; 
}
else if(player === scissors && computer === paper)
{
document.getElementById(choose).innerHTML=Player slays;
pscore++;
document.getElementById(pscore).innerHTML = pscore;
return; 
}
}