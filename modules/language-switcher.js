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
      document.querySelector('.keyboard').remove();
      document.querySelector('.text-area').after(generateKeyboard());
    }
  }
};

export default languageSwitcher;
