const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const getDegrees = function(metric) {
  const now = new Date();
  if (metric === 'hours') {
    const hoursDegrees = ((now.getHours() / 12) * 360) + ((now.getMinutes() / 60) * 30) + 90;
    return hoursDegrees;
  } else if (metric === 'minutes') {
    const minsDegrees = ((now.getMinutes() / 60) * 360) + ((now.getSeconds() / 60) * 6) + 90;
    return minsDegrees;
  } else {
    const secondsDegrees = ((now.getSeconds() / 60) * 360) + 90;
    return secondsDegrees;
  }
};

const setDate = function() {
  const now = new Date();

  let secondsDegrees = getDegrees('seconds');
  let minutesDegrees = getDegrees('minutes');
  let hoursDegrees = getDegrees('hours');

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg`;
};

setInterval(setDate, 1000);
