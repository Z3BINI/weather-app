const searchBtn = document.querySelector('button')
const searchIpt = document.querySelector('input')


const getWeatherData = async (searchTerm) => {

    try {
    
        if (!searchTerm) searchTerm = 'auto:ip'

        const weatherPromise = await fetch('https://api.weatherapi.com/v1/forecast.json?key=fc12493872cf47e9b0c132053233110&days=3&q=' + searchTerm, 
        { mode: 'cors' })
        
        const weatherData = await weatherPromise.json()

        if (weatherData.error) handleError(weatherData.error.code)

        return weatherData
        
    } catch(error) {

        console.log(error)

    }

}

const handleError = (errorCode) => {

    console.log('Fixing ' + errorCode)

}

searchBtn.addEventListener('click', () => getWeatherData(searchIpt.value))





