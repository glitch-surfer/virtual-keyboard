/* import keyboard from './keyboard.js'; */
import generateKeyboard from './generate-keyboard.js';

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

const generatePage = () => {
  document.body.append(generateTitle());
  document.body.append(generateTextArea());
  document.body.append(generateKeyboard());
};

export default generatePage;
