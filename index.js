/* const arr = [];
document.addEventListener('keydown', (e) => {
  console.log(`{key: ${e.key}, code: ${e.code}}`);
  arr.push({ key: e.key, code: e.code });
  console.log(arr);
  console.log(JSON.stringify(arr));
}); */

/* import { keyboard } from './keyboard';
console.log(keyboard[0]); */

const keyboard = [
  {
    keyRus: '`',
    keyEng: ']',
    code: 'Backquote',
    classes: 'btn',

  },
  {
    keyRus: '1',
    keyEng: '1',
    code: 'Digit1',
    classes: 'btn',

  },
  {
    keyRus: '2',
    keyEng: '2',
    code: 'Digit2',
    classes: 'btn',

  },
  {
    keyRus: '3',
    keyEng: '3',
    code: 'Digit3',
    classes: 'btn',

  },
  {
    keyRus: '4',
    keyEng: '4',
    code: 'Digit4',
    classes: 'btn',

  },
  {
    keyRus: '5',
    keyEng: '5',
    code: 'Digit5',
    classes: 'btn',

  },
  {
    keyRus: '6',
    keyEng: '6',
    code: 'Digit6',
    classes: 'btn',

  },
  {
    keyRus: '7',
    keyEng: '7',
    code: 'Digit7',
    classes: 'btn',

  },
  {
    keyRus: '8',
    keyEng: '8',
    code: 'Digit8',
    classes: 'btn',

  },
  {
    keyRus: '9',
    keyEng: '9',
    code: 'Digit9',
    classes: 'btn',

  },
  {
    keyRus: '0',
    keyEng: '0',
    code: 'Digit0',
    classes: 'btn',

  },
  {
    keyRus: '-',
    keyEng: '-',
    code: 'Minus',
    classes: 'btn',

  },
  {
    keyRus: '=',
    keyEng: '=',
    code: 'Equal',
    classes: 'btn',

  },
  {
    keyRus: 'Backspace',
    keyEng: 'Backspace',
    code: 'Backspace',
    classes: 'btn btn_func backspace',

  },
  {
    keyRus: 'Tab',
    keyEng: 'Tab',
    code: 'Tab',
    classes: 'btn btn_func tab',

  },
  {
    keyRus: 'й',
    keyEng: 'q',
    code: 'KeyQ',
    classes: 'btn',

  },
  {
    keyRus: 'ц',
    keyEng: 'w',
    code: 'KeyW',
    classes: 'btn',

  },
  {
    keyRus: 'у',
    keyEng: 'e',
    code: 'KeyE',
    classes: 'btn',

  },
  {
    keyRus: 'к',
    keyEng: 'r',
    code: 'KeyR',
    classes: 'btn',

  },
  {
    keyRus: 'е',
    keyEng: 't',
    code: 'KeyT',
    classes: 'btn',

  },
  {
    keyRus: 'н',
    keyEng: 'y',
    code: 'KeyY',
    classes: 'btn',

  },
  {
    keyRus: 'г',
    keyEng: 'u',
    code: 'KeyU',
    classes: 'btn',

  },
  {
    keyRus: 'ш',
    keyEng: 'i',
    code: 'KeyI',
    classes: 'btn',

  },
  {
    keyRus: 'щ',
    keyEng: 'o',
    code: 'KeyO',
    classes: 'btn',

  },
  {
    keyRus: 'з',
    keyEng: 'p',
    code: 'KeyP',
    classes: 'btn',

  },
  {
    keyRus: 'х',
    keyEng: '[',
    code: 'BracketLeft',
    classes: 'btn',

  },
  {
    keyRus: 'ъ',
    keyEng: ']',
    code: 'BracketRight',
    classes: 'btn',

  },
  {
    keyRus: 'ё',
    keyEng: '\\',
    code: 'Backslash',
    classes: 'btn',

  },
  {
    keyRus: 'CapsLock',
    keyEng: 'CapsLock',
    code: 'CapsLock',
    classes: 'btn btn_func caps-lock',

  },
  {
    keyRus: 'ф',
    keyEng: 'a',
    code: 'KeyA',
    classes: 'btn',

  },
  {
    keyRus: 'ы',
    keyEng: 's',
    code: 'KeyS',
    classes: 'btn',

  },
  {
    keyRus: 'в',
    keyEng: 'd',
    code: 'KeyD',
    classes: 'btn',

  },
  {
    keyRus: 'а',
    keyEng: 'f',
    code: 'KeyF',
    classes: 'btn',

  },
  {
    keyRus: 'п',
    keyEng: 'g',
    code: 'KeyG',
    classes: 'btn',

  },
  {
    keyRus: 'р',
    keyEng: 'h',
    code: 'KeyH',
    classes: 'btn',

  },
  {
    keyRus: 'о',
    keyEng: 'j',
    code: 'KeyJ',
    classes: 'btn',

  },
  {
    keyRus: 'л',
    keyEng: 'k',
    code: 'KeyK',
    classes: 'btn',

  },
  {
    keyRus: 'д',
    keyEng: 'l',
    code: 'KeyL',
    classes: 'btn',

  },
  {
    keyRus: ';',
    keyEng: 'ж',
    code: 'Semicolon',
    classes: 'btn',

  },
  {
    keyRus: 'э',
    keyEng: "'",
    code: 'Quote',
    classes: 'btn',

  },
  {
    keyRus: 'Enter',
    keyEng: 'Enter',
    code: 'Enter',
    classes: 'btn btn_func enter',

  },
  {
    keyRus: 'Shift',
    keyEng: 'Shift',
    code: 'ShiftLeft',
    classes: 'btn btn_func shift',

  },
  {
    keyRus: 'я',
    keyEng: 'z',
    code: 'KeyZ',
    classes: 'btn',

  },
  {
    keyRus: 'ч',
    keyEng: 'x',
    code: 'KeyX',
    classes: 'btn',

  },
  {
    keyRus: 'с',
    keyEng: 'c',
    code: 'KeyC',
    classes: 'btn',

  },
  {
    keyRus: 'м',
    keyEng: 'v',
    code: 'KeyV',
    classes: 'btn',

  },
  {
    keyRus: 'и',
    keyEng: 'b',
    code: 'KeyB',
    classes: 'btn',

  },
  {
    keyRus: 'т',
    keyEng: 'n',
    code: 'KeyN',
    classes: 'btn',

  },
  {
    keyRus: 'ь',
    keyEng: 'm',
    code: 'KeyM',
    classes: 'btn',

  },
  {
    keyRus: 'б',
    keyEng: ',',
    code: 'Comma',
    classes: 'btn',

  },
  {
    keyRus: 'ю',
    keyEng: '.',
    code: 'Period',
    classes: 'btn',

  },
  {
    keyRus: '/',
    keyEng: '/',
    code: 'Slash',
    classes: 'btn',

  },
  {
    keyRus: 'ArrowUp',
    keyEng: 'ArrowUp',
    code: 'ArrowUp',
    classes: 'btn btn_func',

  },
  {
    keyRus: 'Shift',
    keyEng: 'Shift',
    code: 'ShiftRight',
    classes: 'btn btn_func shift',

  },
  {
    keyRus: 'Control',
    keyEng: 'Control',
    code: 'ControlLeft',
    classes: 'btn btn_func ctrl',

  },
  {
    keyRus: 'Alt',
    keyEng: 'Alt',
    code: 'AltLeft',
    classes: 'btn btn_func alt',

  },
  {
    keyRus: 'Meta',
    keyEng: 'Meta',
    code: 'MetaLeft',
    classes: 'btn btn_func alt',

  },
  {
    keyRus: 'Space',
    keyEng: 'Space',
    code: 'Space',
    classes: 'btn btn_func space',

  },
  {
    keyRus: 'Meta',
    keyEng: 'Meta',
    code: 'MetaRight',
    classes: 'btn btn_func alt',

  },
  {
    keyRus: 'Alt',
    keyEng: 'Alt',
    code: 'AltRight',
    classes: 'btn btn_func option',

  },
  {
    keyRus: 'ArrowLeft',
    keyEng: 'ArrowLeft',
    code: 'ArrowLeft',
    classes: 'btn btn_func',

  },
  {
    keyRus: 'ArrowDown',
    keyEng: 'ArrowDown',
    code: 'ArrowDown',
    classes: 'btn btn_func',

  },
  {
    keyRus: 'ArrowRight',
    keyEng: 'ArrowRight',
    code: 'ArrowRight',
    classes: 'btn btn_func',

  },
];

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
