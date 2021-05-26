const API_KEY = "89a4ba33a9211549e7c6b8e0d66d4bb1";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const creatWeatherCard = (weather) => {
  if(weather.name != undefined) {
    const weatherHTML = 
    `
    <div class="weather-card">
      <div class="city">City : ${weather.name}</div>
      <div class="coordinates">Longtitude : ${weather.coord.lon} Lattitude : ${weather.coord.lat}</div>
      <div class="description">Description : ${weather.weather[0].description}</div>
      <ul>
        <li>Temperature : ${weather.main.temp}</li>
        <li>Pressure : ${weather.main.pressure}</li>
        <li>Humidity : ${weather.main.humidity}</li>
        <li>Min Temp. : ${weather.main.temp_min}</li>
        <li>Max Temp. : ${weather.main.temp_max}</li>
      </ul>
    </div>
    `
    main.innerHTML = weatherHTML;
  } else {
    const errorHTML = 
    `
    <div class="error">
    404 Not Found
    </div>
    `
    main.innerHTML = errorHTML;
  }
}

const getWeather = async (city, key) => {
  const result = await fetch(`${API_URL}${city}&units=metric&appid=${key}`);
  const resultData = await result.json();

  creatWeatherCard(resultData);
}

form.onsubmit = (e) => {
  e.preventDefault();
  const input = search.value;
  getWeather(input, API_KEY);
  search.value = "";
}