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
const inGame = document.querySelector(".in-game");

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
      mainSection.style.display = "none";
      inGame.style.display = "flex";
      inGame.innerHTML = ` <div class="player-pick">
      <h1>You Picked</h1>
      <button class="${userChoice}"></button>
    </div>
    <div class="play-again">
      <h1>YOU WIN</h1>
      <button class="play-btn">Play Again</button>
    </div>
    <div class="house-pick">
      <h1>House Picked</h1>
      <button class="${computerChoice}"></button>
    </div>`;
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      let addComp = compCount++;
      compScore.innerHTML = `${addComp}`;
      text.innerHTML = `${computerChoice} beats ${userChoice}.`;
      mainSection.style.display = "none";
      inGame.style.display = "flex";
      inGame.innerHTML = ` <div class="player-pick">
      <h1>You Picked</h1>
      <button class="${userChoice}"></button>
    </div>
    <div class="play-again">
      <h1>YOU LOST</h1>
      <button class="play-btn">Play Again</button>
    </div>
    <div class="house-pick">
      <h1>House Picked</h1>
      <button class="${computerChoice}"></button>
    </div>`;
      break;
    case "rockrrock":
    case "paperpaper":
    case "scissorsscissors":
      mainSection.style.display = "none";
      inGame.style.display = "flex";
      inGame.innerHTML = ` <div class="player-pick">
      <h1>You Picked</h1>
      <button class="${userChoice}"></button>
    </div>
    <div class="play-again">
      <h1>IT'S A DRAW</h1>
      <button class="play-btn">Play Again</button>
    </div>
    <div class="house-pick">
      <h1>House Picked</h1>
      <button class="${computerChoice}"></button>
    </div>`;
      break;
  }
  const playbtn = document.querySelector(".play-btn");
  playbtn.addEventListener("click", () => {
    mainSection.style.display = "flex";
    inGame.style.display = "none";
  });
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

main();
