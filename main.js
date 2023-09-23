
const apiKey = "a28beb924ca3a9d8ff9317c778d9c48d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appId=${apiKey}`);
    let data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + 'km/h';

    
}


searchBtn.addEventListener('click', ()=>{

    checkWeather(searchBox.value);
})
