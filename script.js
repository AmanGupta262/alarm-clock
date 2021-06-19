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
});