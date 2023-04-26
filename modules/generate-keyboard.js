import keyboard from './keyboard.js';

const generateKeyboardContainer = () => {
  const container = document.createElement('div');
  container.classList.add('keyboard');
  return container;
};

const generateBtn = (key) => {
  const btn = document.createElement('div');
  btn.className = key.classes;
  btn.textContent = key.keyEng;
  return btn;
};

const generateKeyboard = () => {
  const container = generateKeyboardContainer();
  for (let i = 0; i < keyboard.length; i += 1) {
    container.append(generateBtn(keyboard[i]));
  }
  return container;
};

export default generateKeyboard;
