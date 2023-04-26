import keyboard from "./keyboard.js";

const physicalKeyboardHandler = (event) => {
  const key = event.code;
  const idx = keyboard.findIndex((item) => item.code === key);
  const container = document.querySelector('.keyboard');
  const virtualKey = container.children[idx];

  virtualKey.classList.add('active');

  setTimeout(() => {
    virtualKey.classList.remove('active');
  }, 150);
};
export default physicalKeyboardHandler;
