export default function fetchCountries(searchQuery) {
  console.log(searchQuery);
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(response => {
    if (response.status === 200) {
      return response.json();
    }
    return response;
  });
}
