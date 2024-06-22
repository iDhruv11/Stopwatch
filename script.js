let isActivated = false;
let timer = 0;
let intervalId;
let min = 0;
let sec = 0;
let msec = 0;
const stopwatch = document.querySelector('.stopwatch');
const activate = document.querySelector('.activate');
const reset = document.querySelector('.reset');
activate.addEventListener('click', ()=>{
    if(isActivated == false){
        isActivated = true;
        activate.innerText = 'Stop';
        intervalId = setInterval(() => {
            timer = timer + 0.01;
            msec = timer.toPrecision(2).toString().split('.')[1];
            if(timer >= 1.00){
                timer = 0;
                sec = sec + 1;
            }
            if(sec>=59){
                sec = 0;
                min = min + 1;
            }
            stopwatch.innerText = `${min}m ${sec}s ${msec}`
            
        }, 10);
    }
    else{
        clearInterval(intervalId);
        isActivated = false;
        activate.innertext = 'Start';
    }
        
})
reset.addEventListener('click', ()=>{
    clearInterval(intervalId);
    msec = min = sec = timer = 0;
    activate.innerText = 'Start';
    isActivated = false;
    stopwatch.innerText = `${min}m ${sec}s ${msec}`;
})