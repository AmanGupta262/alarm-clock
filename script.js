// Accessing Elements
const currentTime = document.querySelector(".current-time");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

// Populating select oprtion on document load
window.addEventListener("DOMContentLoaded", (event) => {
  // Populating hours
  for (let i = 1; i <= 12; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.innerHTML = i < 10 ? "0" + i : i;
    hours.appendChild(option);
  }

  // Populating minutes
  for (let i = 0; i < 60; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.innerHTML = i < 10 ? "0" + i : i;
    minutes.appendChild(option);
  }
  // Populating seconds
  for (let i = 0; i < 60; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.innerHTML = i < 10 ? "0" + i : i;
    seconds.appendChild(option);
  }

  //   showing current time
  setInterval(getCurrentTime, 1000);
});

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
}
