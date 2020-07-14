// eslint-disable-next-line import/extensions
import fetchCountries from './fetchCountries.js';

const selectors = {
  input: document.querySelector('#input-text'),
  namesList: document.querySelector('#list-names'),
  countryName: document.querySelector('#country-name'),
  listCountryInfo: document.querySelector('#list-country-info'),
  countryImg: document.querySelector('#div-country-img'),
};

const resultHandler = data => {
  const clearData = () => {
    selectors.namesList.innerHTML = '';
    selectors.countryName.textContent = '';
    selectors.listCountryInfo.innerHTML = '';
    selectors.countryImg.innerHTML = '';
  };

  if (data instanceof Response) {
    clearData();
    selectors.namesList.insertAdjacentHTML(
      'beforebegin',
      `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>No results for this query!</strong> Please, enter correct query!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`,
    );
    setTimeout(() => {
      document.querySelector('.alert.alert-warning').remove();
    }, 5000);
    return;
  }

  console.log(data);
  if (data.length === 1) {
    clearData();
    console.log('Render 1');
    const countryInfo = data[0];
    selectors.countryName.textContent = countryInfo.name;

    const languagesList = countryInfo.languages
      .map(({ name }) => `<li class="list-group-item">${name}</li>`)
      .join('');
    const languagesHTML = `<ul class="list-group-flush" id="list-country-info">${languagesList}</ul>`;
    selectors.listCountryInfo.insertAdjacentHTML(
      'beforeend',
      `<li class="list-group-item"><b>Capital:</b> ${countryInfo.capital}</li>
     <li class="list-group-item"><b>Population:</b> ${countryInfo.population}</li>
     <li class="list-group-item"><b>Languages:</b> ${languagesHTML}</li>`,
    );
    selectors.countryImg.insertAdjacentHTML(
      'afterbegin',
      `<img class="rounded mx-auto d-block mt-5" src="${countryInfo.flag}" alt="Country Name" width="320" height="180"/>`,
    );
  } else if (data.length > 10 || data.length < 1) {
    clearData();
    selectors.namesList.insertAdjacentHTML(
      'beforebegin',
      `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Too many matches found!</strong> Please, enter more specific query!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`,
    );
    setTimeout(() => {
      document.querySelector('.alert.alert-warning').remove();
    }, 5000);
  } else {
    clearData();
    const listHTML = data
      .map(({ name }) => `<li class="list-group-item">${name}</li>`)
      .join('');
    selectors.namesList.insertAdjacentHTML('afterbegin', listHTML);
  }
};

const inputHandler = e => {
  fetchCountries(e.target.value)
    .then(resultHandler)
    .catch(console.log);
};
selectors.input.addEventListener('input', _.debounce(inputHandler, 500));
