//5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.

let intervalId = null;
let elapsedTime = 0; // tiempo en segundos

const timeDisplay = document.getElementById("time-display");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

// formatea el tiempo en H:M:S
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${hours}:${minutes}:${secs}`;
}

// actualiza el cronómetro
function updateDisplay() {
  timeDisplay.textContent = formatTime(elapsedTime);
}

// inicia el cronómetro
startBtn.addEventListener("click", () => {
  if (intervalId) return;
  intervalId = setInterval(() => {
    elapsedTime++;
    updateDisplay();
  }, 1000);
});

// pausa el cronómetro
pauseBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

// resetea el cronómetro
resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  elapsedTime = 0;
  updateDisplay();
});

// inicializa la pantalla
updateDisplay();
