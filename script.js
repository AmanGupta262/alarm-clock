// Accessing Elements
const currentTime = document.querySelector(".current-time");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const amPm = document.querySelector("#am-pm");
const setAlarmBtn = document.querySelector("#submit-btn");
const alrarmContainer = document.querySelector(".alarms-container");

const alarmsInterval = [];
const alarms = [];

// Populating select oprtion on document load
window.addEventListener("DOMContentLoaded", (event) => {
  // Populating hours
  populate(1, 12, hours)

  // Populating minutes
  populate(0, 59, minutes)

  // Populating seconds
  populate(0, 59, seconds)

  // Showing current time
  setInterval(getCurrentTime, 1000);
});

// Add event listener to set alarm button
setAlarmBtn.addEventListener("click", getInput);


// Populate options 
function populate(start, end, element){
    for(let i=start; i<=end; i++){
        const option = document.createElement("option");
        option.value = i < 10 ? "0" + i : i;
        option.innerHTML = i < 10 ? "0" + i : i;
        element.appendChild(option);
    }
}

// Get current time
function getCurrentTime() {
  let time = new Date();
  time = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  currentTime.innerHTML = time;

  return time;
}

// Get input from user
function getInput(e) {
  e.preventDefault();
  const hourValue = hours.value;
  const minuteValue = minutes.value;
  const secondValue = seconds.value;
  const amPmValue = amPm.value;

  const alarmTime = convertToTime(
    hourValue,
    minuteValue,
    secondValue,
    amPmValue
  );
  setAlarm(alarmTime);
}

// Convert time to 24 hour format
function convertToTime(hour, minute, second, amPm) {
  return `${parseInt(hour)}:${minute}:${second} ${amPm}`;
}

// Set Alarm
function setAlarm(time){
    const alarm = setInterval(() => {
        if(time === getCurrentTime()){
            alert("Alarm Ringing");
        }
        console.log("running");
    },1000)
    alarmsInterval.push(alarm);
}
