import './style.css';
const temperature = document.querySelector('.info-card .card-stats .amount');
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
const requestWeatherData = async (location) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=yes`,
    { mode: 'cors' },
  );
  return response.json();
};
const getHumidityInfo = (amount) => {
  if (amount <= 20) {
    return 'Too dry';
  }
  if (amount <= 60) {
    return 'Comfortable humidity';
  }
  if (amount <= 100) {
    return 'Too humid';
  }
};
const getWindSpeedInfo = (speed) => {
  if (speed <= 2) {
    return 'Calm';
  }
  if (speed <= 5) {
    return 'Light air';
  }
  if (speed <= 10) {
    return 'Light breeze';
  }
  if (speed <= 28) {
    return 'Moderate breeze';
  }
  if (speed <= 49) {
    return 'Strong breeze';
  }
  if (speed <= 61) {
    return 'High wind';
  }
  if (speed <= 75) {
    return 'High wind';
  }
  if (speed <= 80) {
    return 'Strong wind';
  }
  if (speed <= 80) {
    return 'Very strong wind';
  } else {
    return 'Hurricane force';
  }
};
const getAirQualityInfo = (value) => {
  if (value <= 1) {
    return 'Good air quality';
  }
  if (value <= 3) {
    return 'Decent air quality';
  }
  if (value <= 5) {
    return 'Bad air quality';
  }
  if (value <= 8) {
    return 'Really bad air quality';
  }
  if (value <= 10) {
    return 'Extremly bad air quality';
  }
};
const displayWeatherData = (location) => {
  requestWeatherData(location).then((response) => {
    console.log(response);
    temperature.innerText = response.current.temp_c;
    locationName.innerText = response.location.name;
    locationRegion.innerText = response.location.region;
    locationCountry.innerText = response.location.country;
    weatherInfo.innerText = response.current.condition.text;
    weatherImage.src = response.current.condition.icon;
    humidityNumber.innerText = response.current.humidity;
    humidityInfo.innerText = getHumidityInfo(response.current.humidity);
    windSpeedNumber.innerText = response.current.wind_kph;
    windSpeedInfo.innerText = getWindSpeedInfo(response.current.wind_kph);
    console.log(response.current.air_quality);
    airQualityNumber.innerText = response.current.air_quality['gb-defra-index'];
    airQualityInfo.innerText = getAirQualityInfo(
      response.current.air_quality['gb-defra-index'],
    );
  });
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
