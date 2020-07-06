function getMoveName(argMoveId){
     if(argMoveId == 1){
     return 'kamień';
   } else if(argMoveId == 2){
     return 'papier';
   } else if(argMoveId == 3){
     return 'nożyce';
   } else {
     printMessage('Nie znam ruchu o id ' + argMoveId + '.');
     return 'nieznany ruch';
   }
 }
 let randomNumber = Math.floor(Math.random() * 3 + 1);
 console.log('Wylosowana liczba to: ' + randomNumber);

 let computerMove = getMoveName(randomNumber);
 printMessage('Mój ruch to: ' + computerMove);

 let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
 console.log('Gracz wpisał: ' + playerInput);

 let playerMove = getMoveName(playerInput);
 printMessage('Twój ruch to: ' + playerMove);

    function displayResult(computerMove, playerMove){
    if(computerMove == 'kamień' && playerMove == 'papier'){
    return 'Ty wygrywasz';
  } else if (computerMove == 'kamień' && playerMove == 'nożyce') {
    return 'Ja wygrywam';
  } else if (computerMove == 'papier' && playerMove == 'nożyce') {
    return 'Ty wygrywasz';
  } else if (computerMove == 'papier' && playerMove == 'kamień') {
    return 'Ja wygrywam';
  } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    return 'Ty wygrywasz';
  } else if (computerMove == 'nożyce' && playerMove == 'papier') {
    return 'Ja wygrywam';
  } else {
    'Mamy remis!';
  }
  }
