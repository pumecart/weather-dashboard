//HEADER
function headerCreate(){
    const h = document.createElement("header");
    document.body.appendChild(h);
    const h1 = document.createElement("h1");
    const text = document.createTextNode("Weather Dashboard");
    h1.appendChild(text);
    document.body.appendChild(h1);
    h.appendChild(h1);
}

headerCreate();




// WEATHER CITY API

const apiKey = "243e94d8a8d615bddfd6d6bd53928f3e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }else  if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }else  if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }else  if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }else  if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


// WEATHER 4 DAYS API

