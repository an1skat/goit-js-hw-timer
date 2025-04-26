// Task 1
const timer1 = document.getElementById("timer1");
let totalSeconds = 3600;

function updateTimer1() {
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  timer1.textContent =
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");

  if (totalSeconds === 1799) {
    alert("Залишилось менше половини часу!");
  }

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    clearInterval(timerInterval1);
  }
}

updateTimer1();
const timerInterval1 = setInterval(updateTimer1, 1000);

// Task 2
const timer2 = document.getElementById("timer2");
let totalMiliSeconds = 1200;
const timerBtn = document.querySelector("button");

function updateTimer2() {
  timerBtn.setAttribute("disabled", "disabled");
  let seconds = Math.floor(totalMiliSeconds / 100);
  let miliSeconds = totalMiliSeconds % 100;

  timer2.textContent =
    String(seconds).padStart(2, "0") +
    ":" +
    String(miliSeconds).padStart(3, "0");

  if (totalMiliSeconds === 1000) {
    document.querySelector(".block").classList.toggle("visible");
    setTimeout(() => {
      document.querySelector(".block").classList.toggle("visible");
    }, 3000);
  }

  if (totalMiliSeconds === 0) {
    timerBtn.removeAttribute("disabled");
  }

  if (totalMiliSeconds > 0) {
    totalMiliSeconds--;
  } else {
    clearInterval(timerInterval2);
  }
}

updateTimer2();
const timerInterval2 = setInterval(updateTimer2, 1);

timerBtn.addEventListener("click", () => {
  totalMiliSeconds = 3000;
  updateTimer2();
  const timerInterval2 = setInterval(updateTimer2, 1);
});
