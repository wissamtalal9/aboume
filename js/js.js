'use strict'
let namee = prompt('what is your name');
namee.toLowerCase();
alert('Welcome to my profile and good luck for u '+namee);
console.log(' your name is : ' + namee) ;


let ex = prompt('please enter your experiance in your job');

if (ex<3){
  alert('Your experiance is to low work of your self');
  
}
else if(ex>=7){
 alert('Your experiance is very high good job');
}
else{
  alert('Your experiance is '+ex);
     console.log('he answer yes' );

}
let counter = 0;
 alert('now we want from u '+namee+' to answer question with yes/no or y/n ');
 let question = prompt('have you take it any course related in web programming');

 while(question !== 'yes' && question !=='y' && question !=='no' && question !=='n')
 {
   question = prompt('please enter yes/no or y/n');
 }
 if(question ==='yes' || question=='y')
 {
   counter++;
   console.log('he answer yes' );
 }
 

 let question2 = prompt('have you any experiance with languages web ');

 while(question2 !== 'yes' && question2 !=='y' && question2 !=='no' && question2 !=='n')
 {
   question2 = prompt('please enter yes/no or y/n');
 }
 if(question2 ==='yes' || question2=='y')
 {
   counter++;
   console.log('he answer yes' );

 }

 let question3 = prompt('are you ready to take any course in web developer ');

 while(question3 !== 'yes' && question3 !=='y' && question3 !=='no' && question3 !=='n')
 {
   question3 = prompt('please enter yes/no or y/n');
 }
 if(question3 ==='yes' || question3=='y')
 {
   counter++;
   console.log('he answer yes' );

 }

 
/*let x = prompt('which of these element number is true code for order list item in html 1.li 2.ul 3.ol 4.td 5.tr 6.audio');
 let mvalue = ['li','ul','ol','td','tr','audio'];

 for(let i = 0;i<=mvalue.length;i++){
  console.log(mvalue[i]);
   if(mvalue[i] === true)
   {
     console.log('we found it');
   }
 } 
 if(mvalue[3] === x){
   alert('you correct answer');
 }

*/



 /*stringnumber = prompt('please enter your best language number');
 if(stringnumber===null || stringnumber != Number){
  stringnumber = prompt('please enter your best language number');
 }
//var stringa = ['python','c++','c#','php'];
//switch (stringa){
  //case
//}
*/

let country = prompt('where are you from' ) ;
country.toLowerCase();
console.log('your are from ' + country);

let major = prompt('what is your main major' ) ;
major.toLowerCase();
console.log('your main major is  ' + major);

let mark = prompt('what the mark you have it in your major' ) ; 
mark.toLowerCase();
console.log('you ger mark in your main major ' + mark);


alert('you are welcome ' + namee +  ' you are from ' + country + ', your main major is : ' + major + ' and you get mark in your major : ' + mark ) 



var questions = [
  ['what the element to do order list in html?', 'ol'],
      ['what the element to do unorder list in html', 'ul'],
      ['where I can style sheet of my website', 'css']
    ],
    correctAnswers = [],
    wrongAnswers = [];

    function quiz(quizQuestions) {
      var counter = 0;
      
      for (var i = 0; i < questions.length; i++) {
        var answer = prompt(questions[i][0]);
        
        if (answer === questions[i][1]) {
          correctAnswers.push ([questions[i][0]]);
          counter += 1;
        } else {
          wrongAnswers.push ([questions[i][0]]);
        }
      }
      
      print('<h2>You got these questions right</h2>');
      print(correctAnswers);
      print('<h2>You got these questions wrong</h2>');
      print(wrongAnswers);
      
      var printQuestionsRight = '<h3>You got ' + counter + ' questions right</h3>';
      print(printQuestionsRight);
    }

    function print(message) {
      document.write(message);
    }

    quiz(questions);
