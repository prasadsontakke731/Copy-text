const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const text = document.querySelector('.text');
btn.addEventListener('click', () => {
  // select the text
  input.select();

  //   copying the text
  document.execCommand('Copy');

  //
  //   text.innerHTML = data;
});
