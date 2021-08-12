/* eslint-disable */

import { Button } from "bootstrap";
import "./style.css";

window.onload = getRandomCard;
let button = document.querySelector("button");
console.log(button);
button.onclick = getRandomCard;

function getRandomCard(ev) {
  console.log(ev);
  let cardNumbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
  let Suits = ["diamonds", "clubs", "hearts", "spades"];

  function generateRandomNumber(posibilities) {
    let randomNumber = Math.floor(Math.random() * posibilities.length);
    //console.log(randomNumber);
    return posibilities[randomNumber];
  }

  let suit = generateRandomNumber(Suits);
  let card = document.querySelector(".card");
  let cardclass = card.classList;
  cardclass.remove(cardclass[1]);
  cardclass.add(suit);
  //console.log(cardclass);

  let number = document.querySelector(".number");
  let cardNumber = generateRandomNumber(cardNumbers);
  number.innerHTML = cardNumber;

  //let cardSuits = ["♥️", "♦️", "♣️", "♠️"];
  //   let suit = document.getElementsByClassName("suit")
  //   let cardSuit = generateRandomNumber(cardSuits);
  //   for (let i = 0; i < suit.length; i++) {
  //     suit[i].innerHTML = cardSuit;
  //   }
}
