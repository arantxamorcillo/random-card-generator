/* eslint-disable */

import "./style.css";

window.onload = function() {
  let cardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "10", "👸", "👑"];

  let cardSuits = ["♥️", "♦️", "♣️", "♠️"];

  function generateRandomNumber(posibilities) {
    let randomNumber = Math.floor(Math.random() * posibilities.length);
    //console.log(randomNumber);
    return posibilities[randomNumber];
  }

  let number = document.querySelector(".number");
  let cardNumber = generateRandomNumber(cardNumbers);
  number.innerHTML = cardNumber;

  let suit = document.getElementsByClassName("suit");

  let cardSuit = generateRandomNumber(cardSuits);
  for (let i = 0; i < suit.length; i++) {
    suit[i].innerHTML = cardSuit;
  }
};
