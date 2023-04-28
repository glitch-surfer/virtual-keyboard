import keyboard from './keyboard.js';

const capsHandler = (event) => {
  if (event.code === 'CapsLock'
  || event.target.classList.contains('caps-lock')) {
    const btn = document.querySelectorAll('.btn');
    const capsBtn = document.querySelector('.caps-lock');
    capsBtn.classList.toggle('icon-active');
    if (capsBtn.classList.contains('icon-active')) {
      btn.forEach((item, index) => {
        const key = item;
        if (document.currerntLanguage) {
          key.textContent = keyboard[index].keyEngCaps;
        } else {
          key.textContent = keyboard[index].keyRusCaps;
        }
      });
    } else {
      btn.forEach((item, index) => {
        const key = item;
        if (document.currerntLanguage) {
          key.textContent = keyboard[index].keyEng;
        } else {
          key.textContent = keyboard[index].keyRus;
        }
      });
    }
  }
};

export default capsHandler;
