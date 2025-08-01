const userName = prompt("Please enter your name:");
const welcomeMessage = document.getElementById("welcome-message");

if (userName && userName.trim() !== "") {
  welcomeMessage.textContent = `Hi ${userName} Welcome to our website!`;
} else {
  welcomeMessage.textContent = "Hi Guest Welcome to my website!";
}

 document.getElementById('messageForm').addEventListener('submit', function(event) {
      event.preventDefault(); 

 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

  
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayContent').textContent = message;

    document.getElementById('displayMessage').style.display = 'block';

 });