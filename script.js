const socket = new WebSocket("ws://your.websocket.server.address");

function sendPassword() {
    const password = document.getElementById("password").value;
    socket.send(password);
}

const passwordInput = document.getElementById('password');
let currentPassword = '';

function appendDigit(digit) {
    currentPassword += digit;
    passwordInput.value = currentPassword;
}

function submitPassword() {
    // Replace this with your password validation logic
    if (currentPassword === '1234') {
        alert('Password is correct. Light is turning on.');
        sendPassword();
    } else {
        alert('Incorrect password. Try again.');
    }

    // Clear the input field and reset the currentPassword
    passwordInput.value = '';
    currentPassword = '';
}