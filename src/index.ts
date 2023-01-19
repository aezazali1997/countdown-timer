#! /usr/bin/env node
import readline from 'readline-sync'
const delay = (delayInms:number) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }
 const  main = async () =>{

     const counterDate = readline.question('Enter date for counter(hh-mm-ss)');
     const arrDate = counterDate.split('-');
let seconds = +arrDate[2];
let minutes = +arrDate[1];
let hours = +arrDate[0];
while( seconds >=0 && minutes >= 0 && hours >=0 ){
    seconds--;
    await delay(1000);
    console.log('HH ',hours,' MM ',minutes,' SS ',seconds);
    if (seconds===0 && minutes>0){
        minutes--;
        seconds=59;
    }
    if (minutes===0 && hours>=0 && seconds===0){
        hours--;
        minutes=59;
        seconds=59;
    }
}

}
main(); 
// decrease the soend until it reaches zero
// when secodns reaches zero decrease the mm
// if minute reaches zero decrease hour
// if hour reaches zero stop the timer 

