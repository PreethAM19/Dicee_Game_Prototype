var randomnumber1= Math.floor(Math.random()*6)+1;
var randomnumber2= Math.floor(Math.random()*6)+1;

// console.log(randomnumber1);
if (randomnumber1===1){
  document.querySelector("img.img1").src="images/dice1.png";
}
else if(randomnumber1===2){
  document.querySelector("img.img1").src="images/dice2.png";
}
else if(randomnumber1===3){
  document.querySelector("img.img1").src="images/dice3.png";
}
else if(randomnumber1===4){
  document.querySelector("img.img1").src="images/dice4.png";
}
else if(randomnumber1===5){
  document.querySelector("img.img1").src="images/dice5.png";
}
else if(randomnumber1===6){
  document.querySelector("img.img1").src="images/dice6.png";
}

// console.log(randomnumber2);
if (randomnumber2===1){
  document.querySelector("img.img2").src="images/dice1.png";
}
else if(randomnumber2===2){
  document.querySelector("img.img2").src="images/dice2.png";
}
else if(randomnumber2===3){
  document.querySelector("img.img2").src="images/dice3.png";
}
else if(randomnumber2===4){
  document.querySelector("img.img2").src="images/dice4.png";
}
else if(randomnumber2===5){
  document.querySelector("img.img2").src="images/dice5.png";
}
else if(randomnumber2===6){
  document.querySelector("img.img2").src="images/dice6.png";
}

//display_winner
  if (randomnumber1>randomnumber2) {
    document.querySelector("h1").innerHTML="Player 1 Wins!";
  }

  else if (randomnumber1<randomnumber2) {
    document.querySelector("h1").innerHTML="Player 2 Wins!";
  }

  else if (randomnumber1===randomnumber2) {
    document.querySelector("h1").innerHTML="Draw";
  }
