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

  fetch(`/weather.json?zipcode=${zip}`)
    .then(response => response.json())
    .then(responseData => {
      document
        .querySelector('#weather-form')
        .insertAdjacentHTML('beforeend', `<p>${responseData['forecast']}</p>`)
  });

}
document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  const formInputs = {
    melon_type: document.querySelector('#melon-type-field').value,
    qty: document.querySelector('#qty-field').value,
  };

  fetch('/order-melons.json', {
    method: 'POST',
    body: JSON.stringify(formInputs),
    headers: {'Content-Type': 'application/json'},
  })
    .then(response => response.json())
    .then(responseData => {
      const code = responseData['code'];
      const message = responseData['msg'];

      const orderStatus = document.querySelector('#order-status');
      if (code === 'ERROR'){
        orderStatus.classList.add('order-error');
      }
      orderStatus.innerText = `${message}`;
    
    })


}

document.querySelector('#order-form').addEventListener('submit', orderMelons);
