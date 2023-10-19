
function blackON() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://172.20.10.2/relay/0?turn=on", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ password: currentPassword }));
}

function blackOFF() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://172.20.10.2/relay/0?turn=off", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ password: currentPassword }));
}


function lightONN() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://172.20.10.2/relay/0?turn=on", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ password: currentPassword }));
}

function lightOFF() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://172.20.10.2/relay/0?turn=off", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ password: currentPassword }));
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
        window.location.href = 'correct.html';
        blackON();
        lightOFF();
    } else {
        alert('Incorrect password. Try again.');
    }

    // Clear the input field and reset the currentPassword
    passwordInput.value = '';
    currentPassword = '';
}

