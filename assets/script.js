var cityInput = document.getElementById("weather-input");
var startWeather = document.getElementById("start-weather")
var mainWeather = document.querySelector(".main-weather")
var fiveDay = document.querySelector(".card-body")
var historyList = document.querySelector(".history-list")


// var weather = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=eec895795d5d972c767275a1537c9915`;
// fetch(weather)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });
  
function testFunction(cityName){
    
    let weather = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=eec895795d5d972c767275a1537c9915&units=imperial`;
    fetch(weather)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var icon = data.list[0].weather[0].icon
    var iconEndpoint = `https://openweathermap.org/img/wn/${icon}.png`
    var todayForcast = `
    <div>
    <h2>${data.city.name}</h2>
    <img src="${iconEndpoint}">
    <p>temp ${data.list[0].main.temp}</p>
    <p>hummidity ${data.list[0].main.humidity}</p>
    <p>wind speed ${data.list[0].wind.speed}</p>
    </div>
    `;
    mainWeather.innerHTML = todayForcast;

    var weeklyForcast = data.list.filter(day => day.dt_txt.includes("12:00:00"))
    console.log(weeklyForcast)
    var fiveDayCard = ""
    for(var i=0; i<weeklyForcast.length; i++){
      var icon = weeklyForcast[i].weather[0].icon
      var iconEndpoint = `https://openweathermap.org/img/wn/${icon}.png`
      fiveDayCard += `
      <div class = "card"> 
      <img src="${iconEndpoint}">
      <p>temp ${weeklyForcast[i].main.temp}</p>
      <p>hummidity ${weeklyForcast[i].main.humidity}</p>
      <p>wind speed ${weeklyForcast[i].wind.speed}</p>
      </div>      
      `; 
      fiveDay.innerHTML = fiveDayCard;
    }

  });
}
var cityHistory = ()=>{
  var history = cityInput.value.trim()
  var pastCity = JSON.parse(localStorage.getItem("pastCity"))||[]
  pastCity.push(history)
  localStorage.setItem("pastCity", JSON.stringify(pastCity))
  makeButtons(pastCity)
}

var makeButtons = (pastCity)=>{
historyList.innerHTML = ""
pastCity.forEach((city)=>{

  var button = document.createElement("li")
  button.textContent = city
  button.className += "pastCityButton"
  historyList.appendChild(button)
  button.addEventListener("click", (event)=>{
    event.preventDefault()
    var pastCity = button.textContent
    testFunction(pastCity)
  })
})
  

}
startWeather.addEventListener("click", ()=>{
  let cityName = cityInput.value
  testFunction(cityName)
  cityHistory()

})