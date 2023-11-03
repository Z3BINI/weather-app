const searchBtn = document.querySelector('button')
const searchIpt = document.querySelector('input')


const getWeatherData = async (searchTerm) => {
    
    if (!searchTerm) searchTerm = 'auto:ip'

    const weatherPromise = await fetch('https://api.weatherapi.com/v1/forecast.json?key=fc12493872cf47e9b0c132053233110&days=3&q=' + searchTerm, 
    { mode: 'cors' })
    
    const weatherData = await weatherPromise.json()

    console.log(weatherData)
    return weatherData
}

searchBtn.addEventListener('click', () => getWeatherData(searchIpt.value))





