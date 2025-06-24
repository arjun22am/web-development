document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherButton = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "5f56d525d1619d0a2cd2eac4ce55588e";

  getWeatherButton.addEventListener("click", async () => {
    const city = cityInput.value.trim();

    if (!city) return;

    const weatherData = await getWeatherData(city);
    if (weatherData.cod !== "404") {
      displayWeatherData(weatherData);
    } else {
      displayError();
    }
  });

  async function getWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    console.log(response);

    if (!response.ok) {
      console.log("City nai mili");
    }

    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    console.log(data);

    const { name, main, weather } = data;
    cityName.textContent = name;
    temperature.textContent = `Temperature : ${main.temp}`;
    description.textContent = `Weather : ${weather[0].main}`;

    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function displayError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
