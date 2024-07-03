const hDeg = 30;
const mDeg = 6.0;
const sDeg = 6.0;
const hmDeg = 1 / 4;
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

function Tick() {
  const d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  let rSh = (seconds * sDeg) + 90;
  let rMh = (minutes * mDeg) + 90;
  let rHh = (hours * hDeg) + (hmDeg * minutes) + 90;

  if (hours > 12) {
    hours -= 12;
  }
  
  hourHand.style.transform = `rotate(${rHh}deg)`;
  minuteHand.style.transform = `rotate(${rMh}deg)`;
  secondHand.style.transform = `rotate(${rSh}deg)`;
  
}

setInterval(Tick, 1000);
