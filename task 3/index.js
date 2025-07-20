let AcStatues = false;
let temp = 24;
let fan = 0;

function togglePower() {
  if (AcStatues == false) {
    AcStatues = true;
    fan = 1;
    console.log(`AC open`);
  } else {
    AcStatues = false;
    console.log(`AC off`);
  }
  updateDisplay();
}

function IncTemp() {
  if (AcStatues == true && temp < 28) {
    temp++;
    console.log(temp);
  }
  updateDisplay();
}
function DecTemp() {
  if (AcStatues == true && temp > 16) {
    temp--;
    console.log(temp);
  }
  updateDisplay();
}

function changeFan() {
  if (AcStatues == true && fan < 3) {
    fan++;
    console.log(fan);
  } else if (AcStatues == true) {
    fan = 1;
    console.log(fan);
  }
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  if (!AcStatues) {
    display.textContent = "OFF";
  } else {
    display.textContent = `${temp}°C | ${fan}`;
  }
}
