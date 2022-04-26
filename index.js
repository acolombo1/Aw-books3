import displayClock from './modules/clock.js';
import Bookshelf from './modules/bookshelf.js';
import hidepages from './modules/hidepages.js';

window.addEventListener('load', () => {
  const addBtn = document.getElementById('add');
  const listBtn = document.getElementById('list');
  const addNewBtn = document.getElementById('addNew');
  const contactBtn = document.getElementById('contact');

  setTimeout(displayClock, 1000);

  const mybookshelf = new Bookshelf();

  addBtn.addEventListener('click', mybookshelf.addNewBook);
  listBtn.addEventListener('click', hidepages);
  addNewBtn.addEventListener('click', hidepages);
  contactBtn.addEventListener('click', hidepages);

  mybookshelf.retrievedata();
});