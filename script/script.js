const userName = prompt("Please enter your name:");
const welcomeMessage = document.getElementById("welcome-message");

if (userName && userName.trim() !== "") {
  welcomeMessage.textContent = `Hi ${userName} Welcome to our website!`;
} else {
  welcomeMessage.textContent = "Hi Guest Welcome to our website!";
}
