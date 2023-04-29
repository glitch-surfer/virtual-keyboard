/* import keyboard from './keyboard.js'; */
import generateKeyboard from './generate-keyboard.js';

const languageSwitcher = (event) => {
  if (event.code === 'AltLeft'
    || event.code === 'ControlLeft') {
    if (document.querySelector('.alt').classList.contains('active')
      && document.querySelector('.ctrl').classList.contains('active')) {
      document.currerntLanguage = !document.currerntLanguage;

      localStorage.removeItem('currerntLanguage');
      if (document.currerntLanguage) {
        localStorage.setItem('currerntLanguage', 'true');
      } else {
        localStorage.setItem('currerntLanguage', '');
      }

      // TODO: switch language saving caps doesn`t work correctly
      /* const btns = document.querySelectorAll('.btn');
      if (document.currerntLanguage
        && document.querySelector('.caps-lock').classList.contains('icon-active')) {
        btns.forEach((item, index) => {
          const key = item;
          key.textContent = keyboard[index].keyEngCaps;
        });
      } else if (!document.currerntLanguage
        && document.querySelector('.caps-lock').classList.contains('icon-active')) {
        btns.forEach((item, index) => {
          const key = item;
          key.textContent = keyboard[index].keyRusCaps;
        });
      } else if (document.currerntLanguage) {
        btns.forEach((item, index) => {
          const key = item;
          key.textContent = keyboard[index].keyEng;
        });
      } else {
        btns.forEach((item, index) => {
          const key = item;
          key.textContent = keyboard[index].keyRus;
        });
      } */
      document.querySelector('.keyboard').remove();
      document.querySelector('.text-area').after(generateKeyboard());
    }
  }
};

export default languageSwitcher;
