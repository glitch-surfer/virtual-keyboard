const insertVirtualKeyboard = (event) => {
  if (event.target.closest('.btn')) {
    const key = event.target.innerHTML;
    const textarea = document.querySelector('.text-area');
    textarea.textContent += key;
  }
};

export default insertVirtualKeyboard;
