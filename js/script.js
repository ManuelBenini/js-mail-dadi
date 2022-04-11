/*
  MAIL
  a. Chiedi all'utente la sua email,
  b. Controlla se sia nella lista di chi può accedere (Creare   una lista con gli utenti autorizzati),
  c. Stampa messaggio appropriato sull'esito del controllo.

  DADI
  a2. Generare un numero random da 1 a 6 per utente e PC,
  b2. Stabilire il vincitore in base al punteggio più alto.


  MAIL
  1. Dichiarare variabili (Email ed array)
  2. Prompt variabile Email
  3. Creare ciclo For per controlli

  DADI
  1,2. Dichiarare variabili (Numero casuale per utente e PC)
  2,2. Stabilire il numero più alto con messaggio di vincita
*/



// EMAIL

// VARIABILI
const check = document.getElementById('check');

const emailArray = ['mihai@gmail.com', 'andrea@gmail.com' , 'agostino@gmail.com']

const emailCheck = document.getElementById('emailcheck');
// VARIABILI //


// FUNZIONE CLICK PER ACCEDERE CON EMAIL
check.addEventListener('click' , function(){
  
  const userEmail = document.getElementById('emailtxt').value;

  let flag = false;

  for (let i = 0; i < emailArray.length; i++){
  
    if(emailArray[i] === userEmail){
      flag = true;
    }
  
  }
  
  if(flag){
    emailCheck.innerHTML = 'L\'email inserita è corretta e puoi accedere';
  }else{
    emailCheck.innerHTML = 'L\'email inserita non è presente, vietato l\'accesso';
  }

})
// FUNZIONE CLICK PER ACCEDERE CON EMAIL //



// // DADI

// // VARIABILI
// const playDice = document.getElementById('playdice');
// // VARIABILI //


// // FUNZIONE CLICK PER GIOCARE A DADI
// playDice.addEventListener('click' , function(){

//   let userNumber = Math.ceil(Math.random() * 6);
//   let pcNumber = Math.ceil(Math.random() * 6);
//   console.log('user' , userNumber);
//   console.log('pc', pcNumber);

//   if (userNumber > pcNumber){
//     document.querySelector('.playtxt').innerHTML = 'Hai vinto!';
//   }else if (userNumber == pcNumber){
//     document.querySelector('.playtxt').innerHTML = 'Hai pareggiato!';
//   }else{
//     document.querySelector('.playtxt').innerHTML = 'Hai perso!';
//   }

// })
// FUNZIONE CLICK PER GIOCARE A DADI //