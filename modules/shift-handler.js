import keyboard from './keyboard.js';

const shiftDown = (event) => {
  if (event.code === 'ShiftLeft'
  || event.code === 'ShiftRight'
  || event.target.classList.contains('shift-right')
  || event.target.classList.contains('shift-left')) {
    const btn = document.querySelectorAll('.btn');
    btn.forEach((item, index) => {
      const key = item;
      if (document.currerntLanguage) {
        key.textContent = keyboard[index].keyEngShift;
      } else {
        key.textContent = keyboard[index].keyRusShift;
      }
    });
  }
};
//  TODO: resolve interaction witch caps lock
const shiftUp = (event) => {
  if (event.code === 'ShiftLeft'
  || event.code === 'ShiftRight'
  || event.target.classList.contains('shift-right')
  || event.target.classList.contains('shift-left')) {
    const btn = document.querySelectorAll('.btn');
    btn.forEach((item, index) => {
      const key = item;
      if (document.currerntLanguage) {
        key.textContent = keyboard[index].keyEng;
      } else {
        key.textContent = keyboard[index].keyRus;
      }
    });
  }
};

export { shiftDown, shiftUp };
