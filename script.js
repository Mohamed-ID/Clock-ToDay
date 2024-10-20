function myTime() {
    let time = new Date();
    
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    document.getElementById("date").innerText = time.getFullYear() + "-" + (Number(time.getMonth()) + 1) + "-" +
    time.getDate() + " " + dayNames[time.getDay()];
    
    document.getElementById("clock").innerText = time.getHours() + " : " + time.getMinutes() + " : " +  time.getSeconds();
    
    time.getSeconds().change = () => {
        console.log("HI")
    }
    requestAnimationFrame(myTime)
}

myTime();

