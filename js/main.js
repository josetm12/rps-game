var turns = 5;
var playerRounds = 0;
var computerRounds = 0;
var plays = ['r', 's', 'p'];
var playTexts = ['Rock', 'Scissors', 'Paper'];

const getComputerPlay = () => {
  if (turns < 1) return false;

  return plays[Math.floor(Math.random() * 3)];
};

const evaluatePlay = (player, computer) => {
  debugger;
  if (computer === false || computer === '?') return false;

  if (computer === player) return 0;

  let play = player + computer;

  turns--;
  if (play === 'rs' || play === 'sp' || play === 'pr') {
    playerRounds++;
  } else {
    computerRounds++;
  }
};

const onInputClick = (event) => {
  let playerInput = event.target.dataset.play || '?';
  let computerInput = playerInput === '?' ? '?' : getComputerPlay();

  debugger;
  evaluatePlay(playerInput, computerInput);
  updateGame(playerInput, computerInput);
};

var inputs = document.getElementsByClassName('input');

Array.from(inputs).forEach(function (inputBtn) {
  inputBtn.addEventListener('click', onInputClick);
});

document.getElementById('replay-btn').addEventListener('click', () => {
  playerRounds = computerRounds = 0;
  turns = 5;
  updateGame('?', '?');
});

function updateGame(playerInput = '?', computerInput = '?') {
  debugger;

  let winnerText = 'Game on !';
  if (turns === 0) {
    let winner = playerRounds > computerRounds ? 'Player' : 'Computer';

    winnerText = `${winner} is the winner !`;
  }

  let winnerTextEl = document.getElementById('winner-text');
  let turnsEl = document.getElementById('turns-text');
  let statsEl = document.getElementById('stats');

  winnerTextEl.innerHTML = winnerText;
  turnsEl.innerHTML = turns === 0 ? 'Game over !' : `${turns} round(s) left`;
  statsEl.innerHTML = `Player: ${playerRounds} | Computer: ${computerRounds}`;

  document.getElementById('com-last').innerHTML =
    playTexts[plays.indexOf(computerInput)] || '?';
  document.getElementById('p-last').innerHTML =
    playTexts[plays.indexOf(playerInput)] || '?';

  return;
}
