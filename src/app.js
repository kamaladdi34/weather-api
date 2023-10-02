import './style.css';
import { getAirQualityInfo, getWindSpeedInfo, getHumidityInfo } from './helper';
const temperature = document.querySelector('.info-card .card-stats .amount');
const temperatureScale = document.querySelector(
  '.info-card .card-stats .scale',
);
const locationName = document.querySelector('.location .name');
const locationRegion = document.querySelector('.location .region');
const locationCountry = document.querySelector('.location .country');
const weatherInfo = document.querySelector('.info-card .card-info');
const searchInput = document.querySelector('.search .input');
const weatherImage = document.querySelector('.info-card .card-image img');
const humidityNumber = document.querySelector('.humidity .card-stats .amount');
const humidityInfo = document.querySelector('.humidity .card-info');
const windSpeedNumber = document.querySelector(
  '.wind-speed .card-stats .amount',
);
const windSpeedInfo = document.querySelector('.wind-speed .card-info');
const airQualityNumber = document.querySelector(
  '.air-quality .card-stats .amount',
);
const airQualityInfo = document.querySelector('.air-quality .card-info');
const API_KEY = 'fbaf5237221c4603adf154400232809';
const temperatureToggle = document.querySelector('#temperature-toggle');
let temperatureC = 0;
const requestWeatherData = async (location) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=yes`,
    { mode: 'cors' },
  );
  return response.json();
};

const displayWeatherData = (location) => {
  requestWeatherData(location)
    .then((response) => {
      setTemperature(response.current.temp_c, !temperatureToggle.checked);
      temperatureC = response.current.temp_c;
      locationName.innerText = response.location.name;
      locationRegion.innerText = response.location.region;
      locationCountry.innerText = response.location.country;
      weatherInfo.innerText = response.current.condition.text;
      weatherImage.src = response.current.condition.icon;
      humidityNumber.innerText = response.current.humidity;
      humidityInfo.innerText = getHumidityInfo(response.current.humidity);
      windSpeedNumber.innerText = response.current.wind_kph;
      windSpeedInfo.innerText = getWindSpeedInfo(response.current.wind_kph);
      airQualityNumber.innerText =
        response.current.air_quality['gb-defra-index'];
      airQualityInfo.innerText = getAirQualityInfo(
        response.current.air_quality['gb-defra-index'],
      );
    })
    .catch((error) => console.log(error));
};
displayWeatherData('lebanon');
document.addEventListener('keydown', (event) => {
  if (
    searchInput.value !== '' &&
    event.key === 'Enter' &&
    event.target === searchInput
  ) {
    displayWeatherData(searchInput.value);
  }
});
const setTemperatureValues = (value, scale) => {
  temperature.innerText = value;
  temperatureScale.innerText = scale;
};
function setTemperature(temperature, isCelsius) {
  const temp = isCelsius ? temperature : (temperature * 9) / 5 + 32;
  const symbol = isCelsius ? '°C' : '°F';
  setTemperatureValues(temp, symbol);
}
temperatureToggle.addEventListener('change', (event) => {
  setTemperature(temperatureC, !event.target.checked);
});
