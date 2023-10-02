export const getAirQualityInfo = (value) => {
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
export const getWindSpeedInfo = (speed) => {
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
export const getHumidityInfo = (amount) => {
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
