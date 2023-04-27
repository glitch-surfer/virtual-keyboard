import keyboard from "./keyboard.js";

const insertPhisicalKeyboard = (event) => {
  const code = event.code;
  const idx = keyboard.findIndex((item) => item.code === code);
  const textarea = document.querySelector('.text-area');
  let key;
  if (document.currerntLanguage) {
    key = keyboard[idx].keyEng;
  } else {
    key = keyboard[idx].keyRus;
  }
  if (code === 'Enter') {
    textarea.value += '\n';
  } else if (code === 'Backspace') {
    textarea.value = textarea.value.slice(0, -1);
  } else if (code === 'Space') {
    textarea.value += ' ';
  } else if (code === 'Tab') {
    textarea.value += '  ';
  } else {
    textarea.value += key;
  }
};

export default insertPhisicalKeyboard;
