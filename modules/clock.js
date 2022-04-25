import { DateTime } from './luxon.js';

const displayClock = () => {
  document.getElementById('dateandtime').innerHTML = DateTime.now().toFormat("ff' UTC'Z");
  setTimeout(displayClock, 5000);
};
export default displayClock;