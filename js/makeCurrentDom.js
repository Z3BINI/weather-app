export default function(currentWeather, location) { 
    //Create elements
    //Containers
    const mainCard = document.createElement('div')
    const dataContainer = document.createElement('div')
    const leftContainer = document.createElement('div')
    const rightContainer = document.createElement('div')
    const labelDataPair = []

    for (let i = 1; i <= 7; i++) {
        labelDataPair[i] = document.createElement('div')
        labelDataPair[i].classList.add('data-pair')
    }
    
    //Items
    const countryCity = document.createElement('h2')
    const localTime = document.createElement('h3')
    //Left
    const weatherIcon = document.createElement('img')
    const conditionText = document.createElement('h3')
    const currentTemp = document.createElement('h1')
    const feelsLikeTemp = document.createElement('h3')
    //Right
    const windDir = document.createElement('h3')
    const windSpeedKmh = document.createElement('h3')
    const uv = document.createElement('h3')
    const humidity = document.createElement('h3')
    //Labels
    //Left
    const currentTempLbl = document.createElement('p')
    const feelsLikeTempLbl = document.createElement('p')
    //Right
    const windDirLbl = document.createElement('p')
    const windSpeedKmhLbl = document.createElement('p')
    const uvLbl = document.createElement('p')
    const humidityLbl = document.createElement('p')
    //Put data in element
    //Items
    countryCity.textContent = location.name + ', ' + location.country
    localTime.textContent = location.localtime
    weatherIcon.src = 'http:' + currentWeather.condition.icon
    conditionText.textContent = currentWeather.condition.text
    currentTemp.textContent = currentWeather.temp_c + '°'
    feelsLikeTemp.textContent = currentWeather.feelslike_c + '°' 
    windDir.textContent = currentWeather.wind_dir
    windSpeedKmh.textContent = currentWeather.wind_kph + 'Km/h'
    uv.textContent = currentWeather.uv
    humidity.textContent = currentWeather.humidity + '%'
    //Labels
    currentTempLbl.textContent = 'Current Temperature:'
    feelsLikeTempLbl.textContent = 'Feels like:'
    windDirLbl.textContent = 'Wind Direction:'
    windSpeedKmhLbl.textContent = 'Wind Speed:'
    uvLbl.textContent = 'UV Index:'
    humidityLbl.textContent = 'Humidity:'    
    //Add classes/ids
    mainCard.id = 'current-weather-card'
    dataContainer.classList.add('main-data-container')
    leftContainer.classList.add('left-container')
    rightContainer.classList.add('right-container')
    //Append elements
    labelDataPair[1].appendChild(weatherIcon)
    labelDataPair[1].appendChild(conditionText)
    labelDataPair[2].appendChild(currentTempLbl)
    labelDataPair[2].appendChild(currentTemp)
    labelDataPair[3].appendChild(feelsLikeTempLbl)
    labelDataPair[3].appendChild(feelsLikeTemp)
    labelDataPair[4].appendChild(windDirLbl)
    labelDataPair[4].appendChild(windDir)
    labelDataPair[5].appendChild(windSpeedKmhLbl)
    labelDataPair[5].appendChild(windSpeedKmh)
    labelDataPair[6].appendChild(uvLbl)
    labelDataPair[6].appendChild(uv)
    labelDataPair[7].appendChild(humidityLbl)
    labelDataPair[7].appendChild(humidity)
    leftContainer.appendChild(labelDataPair[1])
    leftContainer.appendChild(labelDataPair[2])
    leftContainer.appendChild(labelDataPair[3])
    rightContainer.appendChild(labelDataPair[4])
    rightContainer.appendChild(labelDataPair[5])
    rightContainer.appendChild(labelDataPair[6])
    rightContainer.appendChild(labelDataPair[7])
    dataContainer.appendChild(leftContainer)
    dataContainer.appendChild(rightContainer)
    mainCard.appendChild(countryCity)
    mainCard.appendChild(localTime)
    mainCard.appendChild(dataContainer)
    
    return mainCard
}