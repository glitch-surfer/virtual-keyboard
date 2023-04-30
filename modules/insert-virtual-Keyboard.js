const insertVirtualKeyboard = (event) => {
  if (event.target.closest('.btn')) {
    const key = event.target.textContent;
    const textarea = document.querySelector('.text-area');
    switch (key) {
      case 'Enter':
        textarea.value += '\n';
        break;
      case 'Backspace':
        textarea.value = textarea.value.slice(0, -1);
        break;
      case '':
        textarea.value += ' ';
        break;
      case 'Tab':
        textarea.value += '  ';
        break;
      case 'Caps Lock':
      case 'Shift':
      case 'Control':
      case 'Option':
      case 'Command':
        break;
      default:
        textarea.value += key;
    }
  }
};

export default insertVirtualKeyboard;
