import keyboard from "./keyboard.js";

const physicalKeyboardHandler = (event) => {
  const key = event.code;
  const idx = keyboard.findIndex((item) => item.code === key);
  const container = document.querySelector('.keyboard');
  const virtualKey = container.children[idx];

  if (event.type === 'keydown') {
    if (virtualKey.classList.contains('active') === false) {
      virtualKey.classList.add('active');
    }
  } else {
    virtualKey.classList.remove('active');
  }
};
export default physicalKeyboardHandler;
