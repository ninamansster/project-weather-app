const containerWeather = document.getElementById('weatherNow')

fetch('http://api.openweathermap.org/data/2.5/weather?q=Kalmar,se&units=metric&APPID=996158b88361cd2c1991a7aee0bf6883')
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        containerWeather.innerHTML = `<h1>The weather in ${json.name} is ${json.weather[0].description} and it is ${json.main.temp} degrees.</h1>`
        console.log(json)
    })
    .catch((err) => {
        console.log('caught error', err)
    })

/*
const container = document.getElementById('forecast')
'http://api.openweathermap.org/data/2.5/forecast?q=Kalmar,Sweden&units=metric&cnt=3&APPID=996158b88361cd2c1991a7aee0bf6883
*/