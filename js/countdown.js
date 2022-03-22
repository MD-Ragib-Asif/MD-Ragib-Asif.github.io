//calculate how the time works

const second = 1000;
const minute = second*60;
const hour = minute*60;
const day = hour*24;


const countdown = () => {
    const countDate = new Date('March 24,2022 16:00:00').getTime(); //1st
    const now = new Date().getTime();
    const gap = countDate - now;
  
    //calculate the time 
    const textDay = Math.floor(gap/day);
    const textHour = Math.floor(gap%day/hour);
    const textMin = Math.floor(gap%hour/minute);
    const textSec = Math.floor(gap%minute/second);
    // console.log(countDate);
    // console.log(textDay,textHour,textMin,textSec);

    //setting to inner text
    document.getElementById('day').innerText = textDay;
    document.getElementById('hour').innerText = textHour;
    document.getElementById('minute').innerText = textMin;
    document.getElementById('second').innerText = textSec;
    
}


setInterval(countdown, 1000);

// Set Deadline Function 
const humdeadline = (lastDate) => {
    const midTerm = "March 25,2022 15:00:00" //2nd
    const countDate = new Date(midTerm).getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    
    //calculate the time 
    let textMin;
    let textSec;
    let textHour;
    let textDay;
    if (gap>0){
        textMin = Math.floor(gap%hour/minute);
        textSec = Math.floor(gap%minute/second);
        textHour = Math.floor(gap%day/hour);
        textDay = Math.floor(gap/day);

    }
    else{
        textDay =0;
        textHour =0;
        textMin = 0;
        textSec = 0;
    }
    // setting to inner text
    document.getElementById('hum-day').innerText = textDay;
    document.getElementById('hum-hour').innerText = textHour;
    document.getElementById('hum-minute').innerText = textMin;
    document.getElementById('hum-second').innerText = textSec;
}



setInterval(humdeadline,1000);

// Set Deadline Function 
const embDeadline = () => {
    const midTerm = "March 27,2022 20:00:00" //3rd
    const countDate = new Date(midTerm).getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    
    //calculate the time 

    // console.log(countDate);
    // console.log(textDay,textHour,textMin,textSec);
    let textMin;
    let textSec;
    let textHour;
    let textDay;
    if (gap>0){
        textMin = Math.floor(gap%hour/minute);
        textSec = Math.floor(gap%minute/second);
        textHour = Math.floor(gap%day/hour);
        textDay = Math.floor(gap/day);

    }
    else{
        textDay =0;
        textHour =0;
        textMin = 0;
        textSec = 0;
    }

    // setting to inner text
    document.getElementById('emb-day').innerText = textDay;
    document.getElementById('emb-hour').innerText = textHour;
    document.getElementById('emb-minute').innerText = textMin;
    document.getElementById('emb-second').innerText = textSec;
}

setInterval(embDeadline,1000);

const bngDeadline = () => {
    const midTerm = "March 00,2022 23:59:59" //5th
    const countDate = new Date(midTerm).getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    
    //calculate the time 

    // console.log(countDate);
    // console.log(textDay,textHour,textMin,textSec);
    let textMin;
    let textSec;
    let textHour;
    let textDay;
    if (gap>0){
        textMin = Math.floor(gap%hour/minute);
        textSec = Math.floor(gap%minute/second);
        textHour = Math.floor(gap%day/hour);
        textDay = Math.floor(gap/day);

    }
    else{
        textDay =0;
        textHour =0;
        textMin = 0;
        textSec = 0;
    }

    // setting to inner text
    document.getElementById('bng-day').innerText = textDay;
    document.getElementById('bng-hour').innerText = textHour;
    document.getElementById('bng-minute').innerText = textMin;
    document.getElementById('bng-second').innerText = textSec;
}

setInterval(bngDeadline,1000);

// --------
const engDeadline = () => {
    const midTerm = "March 29,2022 23:59:59" //4th
    const countDate = new Date(midTerm).getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    
    //calculate the time 

    // console.log(countDate);
    // console.log(textDay,textHour,textMin,textSec);
    let textMin;
    let textSec;
    let textHour;
    let textDay;
    if (gap>0){
        textMin = Math.floor(gap%hour/minute);
        textSec = Math.floor(gap%minute/second);
        textHour = Math.floor(gap%day/hour);
        textDay = Math.floor(gap/day);

    }
    else{
        textDay =0;
        textHour =0;
        textMin = 0;
        textSec = 0;
    }

    // setting to inner text
    document.getElementById('cse-day').innerText = textDay;
    document.getElementById('cse-hour').innerText = textHour;
    document.getElementById('cse-minute').innerText = textMin;
    document.getElementById('cse-second').innerText = textSec;
}


setInterval(engDeadline,1000);


