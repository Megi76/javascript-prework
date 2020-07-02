
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
/*
if(randomNumber == '1'){
  computerMove = 'kamień';
} else if (randomNumber == '2'){
  computerMove = 'nożyce';
} else {
  computerMove = 'papier';
} */

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
  playerMove = 'nożyce';
} else if(playerInput == '3') {
  playerMove = 'papier';
}*/

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

let gameresult =displayResult(computerMove, playerMove);
printMessage('Ja zagrałem ' + computerMove + ', Ty zagrałeś '+ playerMove + '. Wynik gry: ' + gameresult);

/*  if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!')
} else if(computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Ja wygrywam!')
} else if(computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Mamy remis!')

} else if(computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Mamy remis!')
} else if(computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!')
} else if(computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Ja wygrywam!')

} else if(computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Ja wygrywam!')
} else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Mamy remis!')
} else if(computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!')
}*/
