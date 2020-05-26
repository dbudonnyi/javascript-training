const input = document.querySelector('#validation-input');
const dataLength = parseInt(input.getAttribute('data-length'), 10);

input.addEventListener('focusout', e => {
  if (e.target.value.length === dataLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
