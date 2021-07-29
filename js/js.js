'use strict'
let first=prompt('what is your name?')

alert('welcome to our website '+ first +' hopefully you will like our website!')
alert('so me and you '+first+' can connect more i suggest we play a game!')


// score counter
let scrCtr=0;

// question 1
let qone=prompt('guess the following: "my favourite animals are Bears"   (yes/y no/n)'). toLowerCase();
if (qone == 'yes' || qone == 'y'){
    alert('correct, i love how big and strong they are!');
    scrCtr++
    // console.log(1st question guessed correctly)
} else if (qone == 'no' || qone == 'n'){
 alert('i actually love bears, good luck with the rest of the questions')}
 else {
alert('please only answer with yes or no');
qone=prompt('guess the following: "my favourite animals are Bears"   (yes/y no/n)'). toLowerCase();

 }


// question 2
let qtwo=prompt('guess the following: "i cheer manchester united as my soccer team"   (yes/y no/n)'). toLowerCase();
if (qtwo == 'no' || qtwo == 'n'){
    alert('I have always been a huge fan for Real madrid !');
    scrCtr++
    // console.log(2nd question guessed correctly)
} else if(qtwo == 'yes' || qtwo == 'y'){
    alert('i hate man Utd!  good luck with the rest of the questions')
} else {
    alert('please only answer with yes or no');
    qtwo=prompt('guess the following: "i cheer manchester united as my soccer team"   (yes/y no/n)'). toLowerCase();}

// question 3
let qthree=prompt('guess the following: "i live in japan"   (yes/y no/n)'). toLowerCase();
if (qthree == 'no' || qthree == 'n'){
    alert('jordan is where i live!');
    scrCtr++
    // console.log(3rd question guessed correctly)
} else if(qthree == 'yes' || qthree == 'y'){
    alert('soon.')
} else {
    alert('please only answer with yes or no');
    qthree=prompt('guess the following: "i live in japan"   (yes/y no/n)'). toLowerCase();}

// question 4
let qfour=prompt('guess the following: "i drive a BMW"   (yes/y no/n)'). toLowerCase();
if (qfour == 'no' || qfour == 'n'){
    alert('I actually like compact cars thats why i have a Golf!');
    scrCtr++
    // console.log(4th question guessed correctly)
} else if(qfour == 'yes' || qfour == 'y'){
    alert('one day!')
} else {
    alert('please only answer with yes or no');
    qfour=prompt('guess the following: "i drive a BMW"   (yes/y no/n)'). toLowerCase();}


// question 5
let qfive=prompt('guess the following: "spongebob is the greatest cartoon of all time"   (yes/y no/n)'). toLowerCase();
if (qfive == 'yes' || qfive == 'y'){
    alert('ayy ayy captain!');
    scrCtr++
    // console.log(5th question guessed correctly)
} else if(qfive == 'no' || qfive == 'n'){
    alert('im pretty sure it is!')
} else {
    alert('please only answer with yes or no');
    qfive=prompt('guess the following: "spongebob is the greatest cartoon of all time"   (yes/y no/n)'). toLowerCase();}


// question 6
let qsix=prompt('guess the number between 1-100')
for (let i=0; i<3 ; i++){
    if (qsix < '69'){
        alert('too low');
        qsix=prompt('guess the number between 1-100');
    }
    else if(qsix>'69'){
        alert('too high');
        qsix=prompt('guess the number between 1-100');
    }
    else if (qsix == '69'){
        alert('well done');
        scrCtr++;
        break;
    }
}


// question 7
let box=['c','c','c','c','r','c','c','c','r','c','c','c','r','c','c','c','r','c','c','c'];
let qseven=prompt('in a mystery box with 20 items in it can you find one of the 4 bunnies? enter 1-20')
for (let k=0; k<5 ; k++){
   
    if (box[qseven] == 'r'){
        alert('you found the rabbit!');
        scrCtr++;
        break;
    }
    else if (box[qseven] == 'c'){
        alert('nope thats a carrot');
        qseven=prompt('in a mystery box with 20 items in it can you find one of the 4 bunnies? enter 1-20')
    }}


alert(`${first} you scored ${scrCtr} out of 7`)
alert('thank you '+ first+' for using our website hopefully you will have a wonderful day today and we cant wait to see you again!')
