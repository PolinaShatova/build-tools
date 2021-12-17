import { Howl } from "../libs/howler";

const formTimer = document.getElementById("timer");
const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
let timeShow = document.getElementsById('timeShow');

btnStart.addEventListener('click', function () {
   time = parseInt(formTimer.value) * 60
})

timer = setInterval(function () {
    seconds = time % 60;
    minutes = time / 60 % 60;
    hour = time / 60 / 60 % 60;

    if (time <= 0) {
        clearInterval(timer);
        const timeEnd = `Время закончилось`;
        timeShow.innerHTML = timeEnd;
    } else {
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        timeShow.innerHTML = strTimer;
    }
    --time;
},1000) 