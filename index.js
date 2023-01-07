let player = {
  name: "Alex",
  chips: 145,
};

let cards = [];
let cardsEl = document.querySelector("#cards-el");
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let playerEl = document.getElementById("player-el");
let sum = 0;
let sumEl = document.querySelector("#sum-el");

playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  cards.push(firstCard);
  cards.push(secondCard);

  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    hasBlackJack = true;
    message = "Congratulations! You have got Blackjack!";
  } else {
    isAlive = false;
    message = "You are out of the game!";
  }
  messageEl.innerText = message;
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";

  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ", ";
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }
}

function getRandomCard() {
  let cardValue = Math.floor(Math.random() * 13 + 1);
  if (cardValue === 1) {
    return 11;
  } else if (cardValue > 10) {
    return 10;
  } else {
    return cardValue;
  }
}
