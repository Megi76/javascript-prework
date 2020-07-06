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

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);

/*  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);

  function displayResult(computerMove, playerMove){
      if(computerMove == 'kamień' && playerMove == 'papier'){
      return 'Ty wygrywasz.';
    } else if (computerMove == 'kamień' && playerMove == 'kamień') {
      return 'Mamy remis.';
    } else if (computerMove == 'papier' && playerMove == 'nożyce') {
      return 'Ty wygrywasz.';
    } else if (computerMove == 'papier' && playerMove == 'papier') {
      return 'Mamy remis.';
    } else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
      return 'Mamy remis.';
    } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
      return 'Ty wygrywasz.';
    } else {
      return 'Ja wygrywam.';
  }
  }

  let gameResult =displayResult(computerMove, playerMove);
  printMessage('Ja zagrałem ' + computerMove + ', Ty zagrałeś '+ playerMove + '. Wynik gry: ' + gameResult);
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


  function computerPoints (gameResult){
    if (gameResult == 'Ja wygrywam.'){
      return 1;
    } else {
      return 0;
    }
  }

  function playerPoints (gameResult){
    if (gameResult == 'Ty wygrywasz.'){
      return 1;
    } else {
      return 0;
    }
  }

  let x = computerPoints(gameResult);
  let y = playerPoints(gameResult);

  document.getElementById('results').innerHTML = 'Mój wynik to: '+ x + ' Twój wynik to: ' + y;
