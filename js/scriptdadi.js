// DADI

// VARIABILI
const playDice = document.getElementById('playdice');
// VARIABILI //


// FUNZIONE CLICK PER GIOCARE A DADI
playDice.addEventListener('click' , function(){

  let userNumber = Math.ceil(Math.random() * 6);
  let pcNumber = Math.ceil(Math.random() * 6);
  console.log('user' , userNumber);
  console.log('pc', pcNumber);
  document.getElementById('userdicenumber').innerHTML =`Il numero del tuo dado &egrave;: ${userNumber}` 
  document.getElementById('pcdicenumber').innerHTML = `Il numero del dado avversario &egrave;: ${pcNumber}`

  if (userNumber > pcNumber){
    document.querySelector('.playtxt').innerHTML = 'Hai vinto!';
  }else if (userNumber == pcNumber){
    document.querySelector('.playtxt').innerHTML = 'Hai pareggiato!';
  }else{
    document.querySelector('.playtxt').innerHTML = 'Hai perso!';
  }

})
// FUNZIONE CLICK PER GIOCARE A DADI //