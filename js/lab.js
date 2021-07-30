'use strict';

function nameOfCustomer() {
  let customerName = prompt('What is your name?');
  alert('Hello ' + customerName + ' nice to meet you! Welcome to my site.');
}
nameOfCustomer();

let correct = 0;

function question1() {
  let childhood = prompt('Did I grow up in Seattle?');
  if (childhood.toLowerCase() === 'no' || childhood.toLowerCase() === 'n') {
    alert('You are correct');
    correct++;
  } else if (childhood.toLowerCase() === 'yes' || childhood.toLowerCase() === 'y') {
    alert('You are incorrect');
  }
  else {
    alert('please answer with yes or no');
    childhood = prompt('Did I grow up in Seattle?');
  }
}

question1();

function question2() {
  let job = prompt('Have I worked in tech before?');
  if (job.toUpperCase() === 'NO' || job.toUpperCase() === 'N') {
    alert('You are correct');
    correct++;
  } else if (job.toUpperCase() === 'yes' || job.toUpperCase() === 'y') {
    alert('You are incorrect');
  }
  else {
    alert('please answer with yes or no');
    job = prompt('Have I worked in tech before?');
  }
}
question2();


function question3() {
  let age = prompt('Am I 26 years of age?');
  if (age.toLowerCase() === 'yes' || age.toLowerCase() === 'y') {
    alert('You are correct');
    correct++;
  } else if (age.toLowerCase() === 'no' || age.toLowerCase() === 'n') {
    alert('You are incorrect');
  }
  else {
    alert('please answer with yes or no');
    age = prompt('Am I 26 years of age?');
  }
}

question3();


function question4() {
  let school = prompt('Did I attend College?');
  if (school.toLowerCase() === 'yes' || school.toLowerCase() === 'y') {
    alert('You are correct');
    correct++;
  } else if (school.toLowerCase() === 'no' || school.toLowerCase() === 'n') {
    alert('You are incorrect');
  }
  else {
    alert('please answer with yes or no');
    school = prompt('Did I attend College?');
  }
}

question4();



function question5() {
  let employer = prompt('Is my ideal employer Lockheed?');
  if (employer.toUpperCase() === 'YES' || employer.toUpperCase() === 'Y') {
    alert('You are correct');
    correct++;
  } else if (employer.toUpperCase() === 'no' || employer.toUpperCase() === 'n') {
    alert('You are incorrect');
  }
  else {
    alert('please answer with yes or no');
    employer = prompt('Is my ideal employer Lockheed?')
  }
}

question5();


function question6() {
  let guess = prompt('Guess a number between 1 and 10');
  let numGuess = Number(guess);
  let answer = 8;

  for (var i = 0; i < 4; i++) {
    if (answer === numGuess) {
      alert('That is correct!');
      correct++;
      break;
    } else if (numGuess < answer) {
      numGuess = parseInt(prompt('Too Low, guess again'));
    } else
      numGuess = parseInt(prompt('That is too high, guess again!'));
  }
  alert('The correct answer was 8!');
}

question6();


function question7() {
  let favSport = ['football', 'lacrosse', 'mma', 'soccer', 'boxing'];

  for (let x = 0; x < 6; x++) {
    let bigGuess = prompt('Can you guess one of my favorite sports?').toLowerCase();
    if (favSport.includes(bigGuess)) {
      alert('You are correct!');
      correct++;
      break;
    } else {
      alert('Sorry, please try again');
    }
  }
}

question7();


alert('You got ' + correct + '/7')