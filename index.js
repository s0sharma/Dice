/*

function random_num(){
      if(Math.floor(Math.random() * 6)+1 == 1){

            var img = document.createElement('img');
            img.src = "images/dice1.png";   
            document.body.appendChild(img); 

           
            console.log("1");
      }

      if(Math.floor(Math.random() * 6)+1 ==2){
            var img = document.createElement('img');
            img.src = "images/dice2.png";   
            document.body.appendChild(img);

            console.log("2");

      }

      if(Math.floor(Math.random() * 6)+1 == 3){
            var img = document.createElement('img');
            img.src = "images/dice3.png";   
            document.body.appendChild(img);

            console.log("3");


      }

      if(Math.floor(Math.random() * 6)+1 == 4){
            var img = document.createElement('img');
            img.src = "images/dice4.png";   
            document.body.appendChild(img);

            console.log("4");

      }

      if(Math.floor(Math.random() * 6)+1 == 5){
            var img = document.createElement('img');
            img.src = "images/dice5.png";   
            document.body.appendChild(img);

            console.log("5");

      }

      if(Math.floor(Math.random() * 6)+1 ==6){
            var img = document.createElement('img');
            img.src = "images/dice6.png";   
            document.body.appendChild(img);

            console.log("6");

      }
}
window.onload = random_num;
*/

var randomNumber1 = Math.floor(Math.random() * 6)+1;

var img1 = "images/" + "dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", img1);


var randomNumber2 = Math.floor(Math.random() * 6)+1;

var img2 = "images/" + "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", img2);



if(randomNumber1 > randomNumber2){

      document.querySelector("h1").innerHTML = "Player 1 Wins"
}

else if(randomNumber1 < randomNumber2){

      document.querySelector("h1").innerHTML = "Player 2 Wins"
}


else{

      document.querySelector("h1").innerHTML = "Draw!"
}






/*
if(randomNumber1 == 1){

      document.querySelector("img").setAttribute("src", "images/dice1.png");
}
else if(randomNumber1 == 2){

      document.querySelector("img").setAttribute("src", "images/dice2.png");
}
else if(randomNumber1 ==3){

      document.querySelector("img").setAttribute("src", "images/dice3.png");
}
else if(randomNumber1 == 4){

      document.querySelector("img").setAttribute("src", "images/dice4.png");
}
else if(randomNumber1 == 5){

      document.querySelector("img").setAttribute("src", "images/dice5.png");
}

else{

      document.querySelector("img").setAttribute("src", "images/dice6.png");
}


var randomNumber2 = Math.floor(Math.random() * 6)+1;

if(randomNumber2 == 1){

      document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
}
else if(randomNumber2 == 2){

      document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
}
else if(randomNumber2 ==3){

      document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
}
else if(randomNumber2 == 4){

      document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
}
else if(randomNumber2 == 5){

      document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");
}

else{

      document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
}
*/
