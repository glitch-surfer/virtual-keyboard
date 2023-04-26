import keyboard from './keyboard.js';

/* const arr = [];
document.addEventListener('keydown', (e) => {
  console.log(`{key: ${e.key}, code: ${e.code}}`);
  arr.push({ key: e.key, code: e.code });
  console.log(arr);
  console.log(JSON.stringify(arr));
}); */

const container = document.createElement('div');
container.classList.add('keyboard');
document.body.append(container);

const generateBtn = (key) => {
  const btn = document.createElement('div');
  btn.className = key.classes;
  container.append(btn);
  btn.textContent = key.keyEng;
};
for (let i = 0; i < keyboard.length; i += 1) {
  generateBtn(keyboard[i]);
}
