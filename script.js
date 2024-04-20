
let minute =0;
let sec=0;
let updateTimerIntervalId;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

const timeElement = document.getElementById('time');

startButton.addEventListener('click', startTimer)
stopButton.addEventListener('click', ()=>{
    clearInterval(updateTimerIntervalId);
})
resetButton.addEventListener('click', ()=>{
    sec=0;
    minute=0;
    timeElement.textContent = `${minute.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`
})

function startTimer(){
    updateTime();
    updateTimerIntervalId =setInterval(updateTime,1000);
}

function updateTime(){
    if(sec==60){
        sec=0;
        minute++;
    }
    sec++;
    timeElement.textContent = `${minute.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`
}

