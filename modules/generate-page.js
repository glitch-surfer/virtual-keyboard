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

const generateDescription = () => {
  const description = document.createElement('p');
  description.classList.add('description');
  description.innerHTML = 'Клавиатура создана в операционной системе MacOS.<br> Для переключения раскладки используйте левые Control + Alt';
  return description;
};

const generatePage = () => {
  document.body.append(generateTitle());
  document.body.append(generateTextArea());
  document.body.append(generateKeyboard());
  document.body.append(generateDescription());
};

export default generatePage;
