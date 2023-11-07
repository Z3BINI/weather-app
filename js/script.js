import makeCurrentDom from './makeCurrentDom.js'
import makeForecastDom from './makeForecastDom.js'

//Cache DOM
const searchBtn = document.querySelector('button')
const searchIpt = document.querySelector('input')
const body = document.querySelector('body')
const wrapper = document.querySelector('.content')

const controller = {
    getWeatherData: async (userSearch) => {
        try {
            const searchTerm = (!userSearch) ? 'auto:ip' : controller.removeSpecialChars(userSearch)
            const weatherPromise = await fetch('https://api.weatherapi.com/v1/forecast.json?key=fc12493872cf47e9b0c132053233110&days=3&q=' + searchTerm, { mode: 'cors' })
            const weatherData = await weatherPromise.json()
    
            if (weatherData.error) {
                controller.handleError(weatherData.error.code)
            } else {
                view.clearDom() 
                view.decideBackground(weatherData.current.is_day)
                view.display(view.makeDom(weatherData))
            }  
        } catch(error) {
            console.log(error)
        }
    },

    handleError: (errorCode) => {
        switch (errorCode) {
            case 1006: //Location not found, load ip defined location
                controller.getWeatherData('')
                break
            default:
                console.log("I don't know what to do!! error: " + errorCode)
                controller.getWeatherData('')
                break
        }
    },

    removeSpecialChars: (searchWord) => searchWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

const view = {
    display: (weatherDataObject) => {
        wrapper.appendChild(weatherDataObject.currentWeatherCard)
        wrapper.appendChild(weatherDataObject.forecastWeatherList)
    },
    makeDom: (weatherData) => {
        const currentWeatherCard = makeCurrentDom(weatherData.current, weatherData.location)
        const forecastWeatherList = makeForecastDom(weatherData.forecast)
        return {currentWeatherCard, forecastWeatherList}
    },
    clearDom: () => wrapper.innerHTML = '',
    decideBackground: (isDay) => (isDay) ? body.style.backgroundImage = 'url("./img/sunny.jpg")' : body.style.backgroundImage = 'url("./img/dark.jpg")'
}

searchBtn.addEventListener('click', () => controller.getWeatherData(searchIpt.value))