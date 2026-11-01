const apiKey = "f287802df3a093ba8a6e86683f21e768";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".celsius input");
const searchBtn = document.querySelector(".celsius button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.jpeg";
    }
    else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.jpeg";
    }
    else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.jpeg";
    }
    else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.jpeg";
    }
    else if(data.weather[0].main == "Mist") {
        weatherIcon.src = images/mist.jpeg;
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});


