document.querySelector('.normalLight').addEventListener('click', toggleLight);
document.querySelector('.blackLight').addEventListener('click', toggleLight);

let normalLightOn = true;
let blackLightOn = false;

function blackON() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://172.20.10.2/relay/0?turn=on", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.send(JSON.stringify({ password: currentPassword }));
    console.log("blacklight On")
}

function blackOFF() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://172.20.10.2/relay/0?turn=off", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.send(JSON.stringify({ password: currentPassword }));
    console.log("blacklight off")
}


function normalONN() {
    // var xhttp = new XMLHttpRequest();
    // xhttp.open("POST", "http://172.20.10.2/relay/0?turn=on", true);
    // xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.send(JSON.stringify({ password: currentPassword }));
    console.log("normal light on")
}

function normalOFF() {
    // var xhttp = new XMLHttpRequest();
    // xhttp.open("POST", "http://172.20.10.2/relay/0?turn=off", true);
    // xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.send(JSON.stringify({ password: currentPassword }));
    console.log("normal light of")
}
// function toggleNormalLight() {
//     if (normalLightOn) {
//         normalOFF();
//     } else {
//         normalONN();
//     }
//     normalLightOn = !normalLightOn;

// }

// function toggleBlackLight() {
//     if (blackLightOn) {
//         blackOFF();
//     } else {
//         blackON();
//     }
//     blackLightOn = !blackLightOn;

// }

function toggleLight() {
    if (blackLightOn) {
        normalOFF();
        blackON();
      
    } else {
        normalONN();
        blackOFF();
    }
    blackLightOn = !blackLightOn;
}

