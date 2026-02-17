async function SearchWeather() {
    let place = document.getElementById("place").value;

    if (place != "") {
        let fetchedWeather = await fetch(`https://api.weatherapi.com/v1/current.json?key=c9f2708b1706445fa03165257261202&q=${place}`);
        let res = await fetchedWeather.json();

        document.getElementById('disTemp').innerText = res.current.temp_c;
        document.getElementById('place').value = "";
        document.getElementById('name').innerText = res.location.name;

        let windspeed = res.current.wind_kph;

        if (windspeed) {
            document.getElementById('windSpeed').innerText = windspeed + " km/h";
            document.getElementById('windIcon').style.display = "inline";
            document.getElementById('windText').style.display = "inline";
        }

    }
}