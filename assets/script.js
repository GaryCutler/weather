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
    
    const weatherTxt1 = document.createElement("h2")
    const weatherTxt2 = document.createElement("h2")
    const weatherTxt3 = document.createElement("h2")
    const weatherTxt4 = document.createElement("h2")
    const weatherTxt5 = document.createElement("h2")
    const cityNameEl = document.createElement("h2")
    cityNameEl.textContent = data.city.name
    document.body.appendChild(cityNameEl)
    const weather1 = document.createElement("h2")
    const weather2 = document.createElement("h2")
    const weather3 = document.createElement("h2")
    const weather4 = document.createElement("h2")
    const weather5 = document.createElement("h2")
    weatherTxt1.textContent = "weather day 1"
    weatherTxt2.textContent = "weather day 2"
    weatherTxt3.textContent = "weather day 3"
    weatherTxt4.textContent = "weather day 4"
    weatherTxt5.textContent = "weather day 5"
   weather1.textContent = data.list[0].main.temp
   weather2.textContent = data.list[1].main.temp
   weather3.textContent = data.list[2].main.temp
   weather4.textContent = data.list[3].main.temp
   weather5.textContent = data.list[4].main.temp
   document.body.appendChild(weatherTxt1)
   document.body.appendChild(weather1)
   document.body.appendChild(weatherTxt2)
   document.body.appendChild(weather2)
   document.body.appendChild(weatherTxt3)
   document.body.appendChild(weather3)
   document.body.appendChild(weatherTxt4)
   document.body.appendChild(weather4)
   document.body.appendChild(weatherTxt5)
   document.body.appendChild(weather5)

  });
}

