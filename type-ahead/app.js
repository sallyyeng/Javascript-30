const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then(res => res.json())
  .then(data => cities.push( ...data));

const findMatches = (placeToMatch, cities) => {
  return cities.filter(place => {
    const regex = new RegExp(placeToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
};

const numberWithCommas = function(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const displayMatches = function() {
  let matchedPlaces = findMatches(this.value, cities);
  const placesToHTML = matchedPlaces.map(place => {
    const regex = new RegExp(this.value, 'gi');
    // replace only where this.value matches the regex value
    // output li contains a span within a span
    const cityName = place.city.replace(regex, `<span class='hl'>${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class='hl'>${this.value}</span>`);
    return `
      <li>
        <span class='name'>${cityName}, ${stateName}</span>
        <span class='population'>${place.population} people</span>
      </li>
    `;
  });
  suggestions.innerHTML = placesToHTML.join('');
};

const makeInputBlank = function() {
  input.setAttribute('placeholder', '');
};

searchInput = document.querySelector('.search');
suggestions = document.querySelector('.suggestions');
input = document.querySelector('input');

searchInput.addEventListener('keyup', displayMatches);
input.addEventListener('click', makeInputBlank);
