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
console.log(humidityInfo);
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
    return 'Comfortable';
  }
  if (amount <= 100) {
    return 'Too wet';
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
