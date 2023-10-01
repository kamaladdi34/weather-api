import '../style.css';
const API_KEY = 'fbaf5237221c4603adf154400232809';
const getWeatherData = async (location) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=yes`,
    { mode: 'cors' },
  );
  console.log(await response.json());
};
getWeatherData('agadir');
