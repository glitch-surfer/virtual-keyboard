import keyboard from './keyboard.js';

/* const arr = [];
document.addEventListener('keydown', (e) => {
  console.log(`{key: ${e.key}, code: ${e.code}}`);
  arr.push({ key: e.key, code: e.code });
  console.log(arr);
  console.log(JSON.stringify(arr));
}); */

const generateTitle = () => {
  const title = document.createElement('h1');
  title.classList.add('main-title');
  title.textContent = 'Virtual Keyboard';
  return title;
};
const generateTextArea = () => {
  const textArea = document.createElement('textarea');
  textArea.classList.add('text-area');
  textArea.setAttribute('cols', '100');
  textArea.setAttribute('rows', '10');
  return textArea;
};
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
const fillKeyboardContainer = () => {
  const container = document.querySelector('.keyboard')
  for (let i = 0; i < keyboard.length; i += 1) {
    container.append(generateBtn(keyboard[i]));
  }
};

const generatePage = () => {
  document.body.append(generateTitle());
  document.body.append(generateTextArea());
  document.body.append(generateKeyboardContainer());
  fillKeyboardContainer();
};
generatePage();
