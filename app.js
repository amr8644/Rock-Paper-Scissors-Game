/*jshint esversion: 8 */
let playerCount = 1;
let compCount = 1;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playerScore = document.querySelector(".player-score");
const compScore = document.querySelector(".comp-score");
const text = document.querySelector(".winner-loser");
const reset = document.querySelector(".reset");
const rules = document.querySelector(".rules-btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-btn");
const mainSection = document.querySelector(".main");
// const playAgain = document.getElementsByClassName("play-again-btn");

function compChoice() {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  const comp = options[random];
  return comp;
}

function game(userChoice) {
  const computerChoice = compChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      let addPlayer = playerCount++;
      playerScore.innerHTML = `${addPlayer}`;
      text.textContent = `${userChoice} beats ${computerChoice}.`;
      mainSection.innerHTML = `<div class="player-pick">
      <h1>You Picked</h1>
      <button class="${userChoice}"></button>
    </div>
    <div class="play-again">
    <h1> YOU WIN </h1>
      <button class="play-again-btn" onclick="playAgain()">Play Again</button>
    </div>
    <div class="house-pick">
      <h1>House Picked</h1>
      <button class="${computerChoice}"></button>
    </div>`;
      break;
    case "rockppaper":
    case "paperscissors":
    case "scissorsrock":
      let addComp = compCount++;
      compScore.innerHTML = `${addComp}`;
      text.innerHTML = `${computerChoice} beats ${userChoice}.`;
      mainSection.innerHTML = `<div class="player-pick">
      <h1>You Picked</h1>
      <button class="${userChoice}"></button>
    </div>
    <div class="play-again">
    <h1> YOU LOSE </h1>
      <button class="play-again-btn" onclick="playAgain()">Play Again</button>
    </div>
    <div class="house-pick">
      <h1>House Picked</h1>
      <button class="${computerChoice}"></button>
    </div>`;
      break;
    case "rockrrock":
    case "paperpaper":
    case "scissorsscissors":
      mainSection.innerHTML = `<div class="player-pick">
      <h1>You Picked</h1>
      <button class="${userChoice}"></button>
    </div>
    <div class="play-again">
    <h1> IT'S A TIE </h1>
      <button class="play-again-btn" onclick="playAgain()">Play Again</button>
    </div>
    <div class="house-pick">
      <h1>House Picked</h1>
      <button class="${computerChoice}"></button>
    </div>`;
      break;
  }
}

function main() {
  rock.addEventListener("click", () => {
    game("rock");
  });
  paper.addEventListener("click", () => {
    game("paper");
  });
  scissors.addEventListener("click", () => {
    game("scissors");
  });
}

rules.addEventListener("click", () => {
  modal.classList.add("show-modal");
});
closeModal.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});
function playAgain() {
  location.reload();
}

main();
