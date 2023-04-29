import generatePage from './modules/generate-page.js';
import physicalKeyboardHandler from './modules/physical-keyboard-handler.js';
import languageSwitcher from './modules/language-switcher.js';
import insertPhisicalKeyboard from './modules/insert-phisical-Keyboard.js';
import insertVirtualKeyboard from './modules/insert-virtual-Keyboard.js';
import { shiftDown } from './modules/shift-handler.js'
import { shiftUp } from './modules/shift-handler.js'
import capsHandler from './modules/caps-handler.js'
/* import pressedCaps from './modules/pressed-caps.js' */

/* const arr = [];
document.addEventListener('keyup', (e) => {
  console.log(e.key);
}); */
document.currerntLanguage = true;
generatePage();

document.addEventListener('keydown', physicalKeyboardHandler);
document.addEventListener('keyup', physicalKeyboardHandler);
document.addEventListener('keyup', languageSwitcher);
document.addEventListener('keydown', insertPhisicalKeyboard);
document.body.addEventListener('click', insertVirtualKeyboard);
document.addEventListener('keydown', shiftDown);
document.addEventListener('pointerdown', shiftDown);
document.addEventListener('pointerup', shiftUp);
document.addEventListener('keyup', shiftUp);
document.addEventListener('keyup', capsHandler);
document.addEventListener('click', capsHandler);
