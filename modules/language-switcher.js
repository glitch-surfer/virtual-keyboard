import generateKeyboard from './generate-keyboard.js';

const languageSwitcher = (event) => {
  if (event.code === 'ShiftLeft'
    || event.code === 'ControlLeft') {
    if (document.querySelector('.shift-left').classList.contains('active')
      && document.querySelector('.ctrl').classList.contains('active')) {
      document.currerntLanguage = !document.currerntLanguage;
      document.querySelector('.keyboard').remove();
      document.body.append(generateKeyboard());
    }
  }
};

export default languageSwitcher;
