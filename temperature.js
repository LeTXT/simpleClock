let degrees = document.querySelector('#degrees')


const APIkey = '5010c5460e3e9df6f634b1198ce7b362'
const url = `https://api.openweathermap.org/data/2.5/weather?q=Taboão da Serra&appid=${APIkey}&units=metric`

// fetch(url).then(response => {
//     if(!response.ok) {
//         throw new Error('Error')
//     }
//     return response.json
// }).then(data => {
//     degrees.innerHTML = data.main.temp
// })

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error');
    }
    return response.json();
  })
  .then(data => {
    degrees.innerHTML = `${parseInt(data.main.temp)}°C`;
  })
  .catch(error => {
    console.error('Erro:', error);
  });
