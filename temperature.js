let degrees = document.querySelector('#degrees')

let userLocation = null
const APIkey = '5010c5460e3e9df6f634b1198ce7b362'

const currentPosition = (position) => {
  userLocation = {
    lat: position.coords.latitude,
    lon: position.coords.longitude
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.lat}&lon=${userLocation.lon}&appid=${APIkey}&units=metric`

  fetch(url)
    .then(response => response.json())
    .then(data => degrees.innerHTML = `${parseInt(data.main.temp)}°C`)
    .catch(error => console.error(error));
}

const errorCurrentPosition = (erro) => {
  console.error(erro);

  userLocation = {
    lat: -23.5489,
    lon: -46.6388
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.lat}&lon=${userLocation.lon}&appid=${APIkey}&units=metric`

  fetch(url)
    .then(response => response.json())
    .then(data => degrees.innerHTML = `${parseInt(data.main.temp)}°C`)
    .catch(error => console.error(error));
}

navigator.geolocation.getCurrentPosition(currentPosition, errorCurrentPosition)
