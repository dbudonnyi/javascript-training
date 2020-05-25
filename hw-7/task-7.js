document.querySelector('#font-size-control').addEventListener('input', e => {
  document.querySelector('span#text').style.fontSize = `${e.target.value}px`;
});
