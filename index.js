import generatePage from './modules/generate-page.js';
import physicalKeyboardHandler from './modules/physical-keyboard-handler.js';
import languageSwitcher from './modules/language-switcher.js';
import insertPhisicalKeyboard from './modules/insert-phisical-Keyboard.js';
import insertVirtualKeyboard from './modules/insert-virtual-Keyboard.js';
/* import pressedShift from './modules/pressed-shift.js' */

/* const arr = [];
document.addEventListener('keydown', (e) => {
  console.log(`{key: ${e.key}, code: ${e.code}}`);
  arr.push({ key: e.key, code: e.code });
  console.log(arr);
  console.log(JSON.stringify(arr));
}); */
document.currerntLanguage = true;
generatePage();

document.addEventListener('keydown', physicalKeyboardHandler);
document.addEventListener('keyup', physicalKeyboardHandler);
document.addEventListener('keyup', languageSwitcher);
document.addEventListener('keydown', insertPhisicalKeyboard);
document.body.addEventListener('click', insertVirtualKeyboard);
/* document.addEventListener('keydown', pressedShift); */
