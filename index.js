


document.addEventListener('DOMContentLoaded', function() {
    // Function to get current UTC time formatted as HH:mm:ss
    function getCurrentUTCTime() {
      const now = new Date();
      const hours = now.getUTCHours().toString().padStart(2, '0');
      const minutes = now.getUTCMinutes().toString().padStart(2, '0');
      const seconds = now.getUTCSeconds().toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    }
  
    // Function to get current day of the week
    function getCurrentDayOfWeek() {
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const now = new Date();
      const dayOfWeek = daysOfWeek[now.getUTCDay()];
      return dayOfWeek;
    }
  
    // Update UTC time element
    const currentTimeUTCElem = document.getElementById('currentTimeUTC');
    if (currentTimeUTCElem) {
      currentTimeUTCElem.textContent = getCurrentUTCTime();
    }
  
    // Update day of the week element
    const currentDayElem = document.getElementById('currentDay');
    if (currentDayElem) {
      currentDayElem.textContent = getCurrentDayOfWeek();
    }
  });
  