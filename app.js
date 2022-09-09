const nameDiv = document.querySelector(".name");
const weatherDiv = document.querySelector(".weather-type");
const tempDiv = document.querySelector(".temp");
const feelsLike = document.querySelector(".feelslike");
const submitBtn = document.getElementById('btn')
const searchField = document.getElementById('search')
const span = document.createElement('span')
const timezoneDiv = document.querySelector('.timezone')

// For Celc conversion
// http://api.openweathermap.org/data/2.5/weather?q=gilbert&units=metric&appid=beb6cbea1cce879189e3f8a1539625dc

async function getWeatherData(name) {
  const fetchData = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${name}&units=imperial&appid=beb6cbea1cce879189e3f8a1539625dc`,
    { mode: "cors" }
  );
  const formData = await fetchData.json();
  const feelsLikeData = formData.main["feels_like"];
  const tempData = formData.main["temp"];
  const weatherData = formData.weather[0]["description"]
const test = formData.timezone;



  // Uppercase the first letter 
  const weatherCap = weatherData.charAt(0).toUpperCase() + weatherData.slice(1)
  nameDiv.textContent = formData.name;
  weatherDiv.textContent = weatherCap;
  tempDiv.textContent = Math.trunc(tempData);
  // Removing the decimal
  feelsLike.textContent = "Feel's like " + Math.trunc(feelsLikeData) + "°F";
  span.textContent = "°F"
  console.log(test);
  console.log(formData)
  tempDiv.appendChild(span)
}

// Search by city name
submitBtn.addEventListener('click', () => {
console.log(searchField.value)
getWeatherData(searchField.value)
})

// getWeatherData('gilbert')