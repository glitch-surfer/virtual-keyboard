const insertVirtualKeyboard = (event) => {
  if (event.target.closest('.btn')) {
    const key = event.target.textContent;
    const textarea = document.querySelector('.text-area');
    if (key === 'Enter') {
      textarea.value += '\n';
    } else if (key === 'Backspace') {
      textarea.value = textarea.value.slice(0, -1);
    } else if (key === '') {
      textarea.value += ' ';
    } else if (key === 'Tab') {
      textarea.value += '  ';
    } else if (key === 'Caps Lock'
    || key === 'Shift'
    || key === 'Control'
    || key === 'Option'
    || key === 'Command') {
      textarea.value += '';
    } else {
      textarea.value += key;
    }
    textarea.textContent += key;
  }
};

export default insertVirtualKeyboard;
