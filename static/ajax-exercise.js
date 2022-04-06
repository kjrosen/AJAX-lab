'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  

  // use fetch to the /fortune route
  // then use .text() to clean up response
  // query selector into the #fortune-text div
  // then put that text into #fortune-text div
  fetch('/fortune')
    .then(response => response.text())
    .then(responseData => {
      const textBox = document.querySelector('#fortune-text');
      textBox.innerHTML = responseData;
    });
};

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();
  const zip = document.querySelector('#zipcode-field').value;

  fetch(`/weather.json:?zipcode:${zip}`)
  .then(response => response.json())
  .then(responseData => {
   
  });

  // TODO: request weather with that URL and show the forecast in #weather-info
}
document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
