
let scoreComputer = 0;
let scorePlayer = 0;


function playGame(playerInput){
  clearMessages();

function getMoveName(MoveId){
      if(MoveId == 1){
      return 'kamień';
    } else if(MoveId == 2){
      return 'papier';
    } else if(MoveId == 3){
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + MoveId + '.');
      return 'nieznany ruch';
    }
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);

  printMessage(`Mój ruch to: ${computerMove}`);

/*  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage(`Twój ruch to: ${playerMove}`);

  const 
  COMPUTER="Ja wygrywam.", 
  PLAYER="Ty wygrywasz.", 
  DRAW="Mamy remis!";

  function displayResult(computerMove, playerMove){
      if(computerMove == 'kamień' && playerMove == 'papier'){
      return PLAYER;
    } else if (computerMove == 'kamień' && playerMove == 'kamień') {
      return DRAW;
    } else if (computerMove == 'papier' && playerMove == 'nożyce') {
      return PLAYER;
    } else if (computerMove == 'papier' && playerMove == 'papier') {
      return DRAW;
    } else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
      return DRAW;
    } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
      return PLAYER;
    } else {
      return COMPUTER;
  }
  }

  const gameResult =displayResult(computerMove, playerMove);
  printMessage(`Ja zagrałem  ${computerMove} Ty zagrałeś ${playerMove}. Wynik gry: ${gameResult}`);
  
  
  function scoreCalc(gameResult){
    if (gameResult == COMPUTER){
      scoreComputer +=1
    }
    else if (gameResult == PLAYER){
      scorePlayer +=1
    }}
    
    scoreCalc(gameResult);
  
  document.getElementById('results').innerHTML = `Moj wynik to: ${scoreComputer} - Twój wynik to: ${scorePlayer}`;

}

  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
