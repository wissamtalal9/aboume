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
let x = prompt('which of these element number is true code for order list item in html 1.li 2.ul 3.ol 4.td 5.tr 6.audio');
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
let major = prompt('what is your main major' ) ;
major.toLowerCase();
let mark = prompt('what the mark you have it in your major' ) ; 
mark.toLowerCase();

alert('you are welcome ' + namee +  ' you are from ' + country + ', your main major is : ' + major + ' and you get mark in your major : ' + mark ) 


console.log('your are from ' + country);
console.log('your main major is  ' + major);
console.log('you ger mark in your main major ' + mark);
