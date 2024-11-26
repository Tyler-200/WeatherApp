/** weather application JavaScript
 *  Author: Tyler Hughes
 */
const apiKey = "91a1c2e2eb9a1b4e7d9016d0a5d6a0be"
const url = "https://api.openweathermap.org/data/2.5/weather?q="


//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

async function checkWeather(place){
    var search = url + place + "&appid=" + apiKey + "&units=metric";
    console.log(search)
    const res = await fetch(search);
    var data = await res.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃";

    var weather = data.weather[0].main;
    console.log(weather);
    console.log(data.weather.icon);

    switch(weather){
        case "Clear":
            document.querySelector(".icon").innerHTML = "🌞";
            document.querySelector(".iconDes").innerHTML = "Clear";
        break;
        case "Clouds":
            document.querySelector(".icon").innerHTML = "☁☁☁";
            document.querySelector(".iconDes").innerHTML = "Cloudy";
        break;
        case "Rain":
            document.querySelector(".icon").innerHTML = "☔";
            document.querySelector(".iconDes").innerHTML = "Rain";
        break;
        case "Drizzle":
            document.querySelector(".icon").innerHTML = "💧";
            document.querySelector(".iconDes").innerHTML = "Drizzle";
        break;
        case "Mist":
            document.querySelector(".icon").innerHTML = "🌁";
            document.querySelector(".iconDes").innerHTML = "Misty";
        break;
        case "Snow":
            document.querySelector(".icon").innerHTML = "⛄";
            document.querySelector(".iconDes").innerHTML = "Snow";
        break;
        default:
            document.querySelector(".icon").innerHTML = "🚫";
            document.querySelector(".iconDes").innerHTML = "undefined";
    }

}
