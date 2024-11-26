/** weather application JavaScript
 *  Author: Tyler Hughes
 */
const apiKey = "91a1c2e2eb9a1b4e7d9016d0a5d6a0be"
const url = "https://api.openweathermap.org/data/2.5/weather?q="

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

async function checkWeather(place){
    var search = url + place + "&appid=" + apiKey;
    console.log(search)
    const res = await fetch(search);
    var data = await res.json();
    console.log(data);
}
checkWeather("prestatyn");