var cityInput = document.getElementById("weather-input");
var startWeather = document.getElementById("start-weather")
startWeather.addEventListener("click", testFunction)
// var weather = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=eec895795d5d972c767275a1537c9915`;
// fetch(weather)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });
  
function testFunction(){
    let cityName = cityInput.value
    let weather = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=eec895795d5d972c767275a1537c9915&units=imperial`;
    fetch(weather)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    const cityNameEl = document.createElement("h2")
    cityNameEl.textContent = data.city.name
    document.body.appendChild(cityNameEl)
    const weather1 = document.createElement("h2")
   weather1.textContent = data.list[0].main.temp
   document.body.appendChild(weather1)

  });
}

