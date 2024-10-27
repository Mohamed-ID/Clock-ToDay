// Constant
const hoursValue = document.getElementById("Hours");
const minuteValue = document.getElementById("Mints");
const secondsValue = document.getElementById("Sec");
const startBotton = document.getElementById("start");
let startblockTime;
let startTime = new Date();
let endTime = new Date();




// Code BLock
startBotton.onclick = () => {
    if(startBotton.id === "start") {
        timeCalc(Number(hoursValue.value), Number(minuteValue.value), Number(secondsValue.value));
    } else {
        clearInterval(startblockTime);
        startBotton.id = "start";
        startBotton.innerText = "Start";
    }
};


// Functions
function myTime() {
    let time = new Date();
    
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    document.getElementById("date").innerText = time.getFullYear() + "-" + (Number(time.getMonth()) + 1) + "-" +
    time.getDate() + " " + dayNames[time.getDay()];
    
    document.getElementById("clock").innerText = time.getHours() + " : " + editTimeShow(time.getMinutes().toString())  + " : " +  editTimeShow(time.getSeconds().toString());
    
    requestAnimationFrame(myTime)
}

myTime();

function timeCalc(hours = 0, minutes = 0, seconds = 0) {
    if(!(hours >= 0)) {
        hours = 0;
        hoursValue.value = 0;
    }
    if(!(minutes >= 0)) {
        minutes = 0;
        minuteValue.value = 0;
    }
    if(!(seconds >= 0)) {
        seconds = 0;
        secondsValue.value = 0;
    }
    let time = (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000);
    startTime.setHours(hours, minutes, seconds);
    endTime.setHours(0, 0, 0);
        startBotton.id = "pause";
        startBotton.innerText = "pause";
    startblockTime = setInterval(() => {
        time -= 1000;
        startTime.setHours(0, 0, 0, time);
        hoursValue.value = editTimeShow(startTime.getHours().toString());
        minuteValue.value = editTimeShow(startTime.getMinutes().toString());
        secondsValue.value = editTimeShow(startTime.getSeconds().toString());
        if(time <= 0) {
            clearInterval(startblockTime);
            hoursValue.value = hours;
            minuteValue.value = minutes;
            secondsValue.value = seconds;
        }
    }, 1000)
}

function editTimeShow(time) {
    if(time.length === 1) {
        return "0" + time;
    } else {
        return time;
    }
}







