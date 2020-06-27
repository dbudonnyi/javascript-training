class CountdownTimer {
  constructor({ selector, targetDate }) {
    const selectors = {
      days: document.querySelector(`${selector} span[data-value="days"]`),
      hours: document.querySelector(`${selector} span[data-value="hours"]`),
      mins: document.querySelector(`${selector} span[data-value="mins"]`),
      secs: document.querySelector(`${selector} span[data-value="secs"]`),
    };

    // eslint-disable-next-line no-use-before-define
    const id = setInterval(changeTimer, 1000);

    function changeTimer() {
      const time = targetDate.getTime() - Date.now();
      if (time <= 0) {
        clearInterval(id);
        return;
      }
      selectors.days.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
      selectors.hours.textContent = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      selectors.mins.textContent = Math.floor(
        (time % (1000 * 60 * 60)) / (1000 * 60),
      );
      selectors.secs.textContent = Math.floor((time % (1000 * 60)) / 1000);
    }
  }
}

// eslint-disable-next-line no-new
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 25, 2020 21:39'),
});
