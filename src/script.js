const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

function updateLocalTime() {
  const localTimeElement = document.getElementById("local-time");

  // Get local time
  const now = new Date();

  // Get hours, minutes, seconds
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  // Get day name
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[now.getDay()].toUpperCase();
  //Times format
  const formattedTime = `${hours}.${minutes}.${seconds} ${day}`;
  // Insert time into HTML element
  localTimeElement.innerHTML = `LOCAL TIME UTC+07.00<br />${formattedTime}`;
}
// Calling the updateLocalTime function every second
setInterval(updateLocalTime, 1000);
// Calling the updateLocalTime function when the page is first loaded
document.addEventListener("DOMContentLoaded", updateLocalTime);

const typingText = "Full-Stack Developer";
let charIndex = 0;

function type() {
  const span = document.getElementById("typing-text");
  if (charIndex < typingText.length) {
    span.innerHTML += typingText.charAt(charIndex);
    charIndex++;
    setTimeout(type, 35); // Adjust typing speed here (in milliseconds)
  }
}

// Trigger typing effect when the page loads
window.onload = type;
