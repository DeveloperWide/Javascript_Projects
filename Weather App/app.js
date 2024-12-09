/* // Your API keys and URLs
let weatherApiKey = "faeb2fe4af7f4417d69965da71596845"; // Replace with your OpenWeatherMap API key
let countryApiUrl =
  "https://restcountries.com/v3.1/name/Pakistan?fullText=true";

fetch(countryApiUrl)
  .then((res) => res.json())
  .then((countryData) => {
    // Extract latitude and longitude
    let [lat, lng] = countryData[0].latlng;
    console.log(`Latitude: ${lat}, Longitude: ${lng}`);

    // Build the weather API URL
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${weatherApiKey}&units=metric`;

    // Fetch weather data
    return fetch(weatherUrl);
  })
  .then((res) => res.json())
  .then((weatherData) => {
    // Log weather details
    console.log("Weather Data:", weatherData);

    // Example: Display temperature and description
    let temp = weatherData.main.temp;
    let description = weatherData.weather[0].description;
    console.log(`Temperature: ${temp}°C`);
    console.log(`Weather: ${description}`);
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });
 */
