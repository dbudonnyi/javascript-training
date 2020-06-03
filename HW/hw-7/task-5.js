document.querySelector('input#name-input').addEventListener('input', e => {
  document.querySelector('span#name-output').textContent =
    e.target.value === '' ? 'незнакомец' : e.target.value;
});
