import keyboard from "./keyboard.js";

const insertPhisicalKeyboard = (event) => {
  const code = event.code;
  const idx = keyboard.findIndex((item) => item.code === code);
  let key;
  if (document.currerntLanguage) {
    key = keyboard[idx].keyEng;
  } else {
    key = keyboard[idx].keyRus;
  }
  const textarea = document.querySelector('.text-area');
  textarea.textContent += key;
};

export default insertPhisicalKeyboard;
