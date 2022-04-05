const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const result = document.getElementById("result");

rock.addEventListener("click", () => {
  startGame("rock");
});

paper.addEventListener("click", () => {
  startGame("paper");
});

scissors.addEventListener("click", () => {
  startGame("scissors");
});

const startGame = (option) => {
  const pcOption = pcMove();
  const userMove = option;
  const comp = comparation(userMove, pcOption);

  if (comp == 1) {
    result.innerHTML = `User choose ${userMove}, devil choose ${pcOption}. </br> <h2>You Win</h2>`;
  }
  if (comp == 2) {
    result.innerHTML = `User choose ${userMove}, devil choose ${pcOption}. </br> <h2>You Lose</h2>`;
  }
  if (comp == 3) {
    result.innerHTML = `User choose ${userMove}, devil choose ${pcOption}. </br> <h2>Tie</h2>`;
  }
};

const pcMove = () => {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  const move = options[random];
  return move;
};

const comparation = (user, pc) => {
  switch (user + pc) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      return 1; //win
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      return 2; // lose
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      return 3; // tie
  }
};
