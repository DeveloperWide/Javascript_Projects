let weatherApiKey = "faeb2fe4af7f4417d69965da71596845"; // Replace with your OpenWeatherMap API key

// Target HTML elements
let countryInput = document.getElementById("countryInput");
let getWeatherButton = document.getElementById("getWeather");
let weatherElement = document.getElementById("weather");

// Fetch and display weather data for the input country
getWeatherButton.addEventListener("click", () => {
  let countryName = countryInput.value.trim();

  if (!countryName) {
    weatherElement.textContent = "Please enter a country name.";
    return;
  }

  let countryApiUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  fetch(countryApiUrl)
    .then((res) => res.json())
    .then((countryData) => {
      if (!countryData || countryData.status === 404) {
        throw new Error("Country not found.");
      }

      let [lat, lng] = countryData[0].latlng;

      let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${weatherApiKey}&units=metric`;

      return fetch(weatherUrl);
    })
    .then((res) => res.json())
    .then((weatherData) => {
      let temp = weatherData.main.temp;
      let description = weatherData.weather[0].description;

      // Update weather information
      weatherElement.textContent = `Temperature: ${temp}°C, Weather: ${description}`;
    })
    .catch((err) => {
      console.error("Error:", err.message);
      weatherElement.textContent =
        err.message || "Failed to load weather data.";
      countryFlag.style.display = "none";
    });
});
