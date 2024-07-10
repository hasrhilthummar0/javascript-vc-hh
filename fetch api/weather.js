// const WeatherApi = require('axios')
// WeatherApi.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m')
//     .then(response => {
//         console.log('weather ', response.data);
//     })
//     .catch(Error => {
//         console.log(Error);
//     })

async function weather() {
    const WeatherA = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m')
    const WeatherB = await WeatherA.json();
    console.log(WeatherB);
}
weather();