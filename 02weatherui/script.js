function getWeatherData() {
  const apiKey = "9d5c0d1d3c55e192e36779f67234a97f";
  const cityInput = document.getElementById("cityInput");
  const cityName = cityInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  if (cityName === "") {
    alert("Please enter a city name!!!");
    return;
  }

  axios
    .get(url)
    .then((response) => {
      const weatherData = response.data;
      displayWeatherData(weatherData);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

function displayWeatherData(data) {
  const weatherDataContainer = document.getElementById("weatherData");
  weatherDataContainer.innerHTML = `
    <p>Temperatue: ${data.main.temp} °C </p>
    <p>Humidity: ${data.main.humidity} %</p>
    <p>Athmospheric Pressure: ${data.main.pressure} hPa</p>
    <p>Weather Description: ${data.weather[0].description} </p>    
    `;
}
