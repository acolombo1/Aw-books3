const smallmsg = document.querySelector('small');

export default () => {
  if (!smallmsg.classList.contains('hideslowly')) {
    smallmsg.classList.add('hideslowly');
  }
};
