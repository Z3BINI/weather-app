//Cache DOM
const searchBtn = document.querySelector('button')
const searchIpt = document.querySelector('input')


const controller = {

    getWeatherData: async (searchTerm) => {

        try {
        
            if (!searchTerm) searchTerm = 'auto:ip'
    
            const weatherPromise = await fetch('https://api.weatherapi.com/v1/forecast.json?key=fc12493872cf47e9b0c132053233110&days=3&q=' + searchTerm, { mode: 'cors' })
            const weatherData = await weatherPromise.json()
    
            if (weatherData.error) {
            
                controller.handleError(weatherData.error.code)
            
            } else {
    
                view.display(weatherData)
            
            }
            
        } catch(error) {
    
            console.log(error)
    
        }
    
    },

    handleError: (errorCode) => {

        switch (errorCode) {
    
            case 1006:
    
                controller.getWeatherData('')
                break
            
            default:
    
                console.log("I don't know what to do!! error: " + errorCode)
                controller.getWeatherData('')
                break
    
        }
    
    }

}

const view = {

    display: (data) => {

        console.log(data);

    }
    
}

searchBtn.addEventListener('click', () => controller.getWeatherData(searchIpt.value))





