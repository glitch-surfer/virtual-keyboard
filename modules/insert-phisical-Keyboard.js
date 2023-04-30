import keyboard from './keyboard.js';

const insertPhisicalKeyboard = (event) => {
  const { code } = event;
  const idx = keyboard.findIndex((item) => item.code === code);
  const textarea = document.querySelector('.text-area');
  const key = document.querySelector('.keyboard').children[idx].textContent;

  switch (code) {
    case 'Enter':
      textarea.value += '\n';
      break;
    case 'Backspace':
      textarea.value = textarea.value.slice(0, -1);
      break;
    case 'Space':
      textarea.value += ' ';
      break;
    case 'Tab':
      textarea.value += '  ';
      break;
    case 'CapsLock':
    case 'ShiftLeft':
    case 'ShiftRight':
    case 'ControlLeft':
    case 'AltLeft':
    case 'MetaLeft':
    case 'MetaRight':
    case 'AltRight':
      break;
    default:
      textarea.value += key;
  }
};

export default insertPhisicalKeyboard;
