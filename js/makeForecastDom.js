export default function(forecastArr) {
    const forecastDomListContainer = document.createElement('div')
    forecastDomListContainer.id = 'forecast-list'
    forecastArr.forecastday.forEach(forecastData => {
        //Create elements
        //Container
        const dataLine = document.createElement('div')
        const content = document.createElement('div')
        const labelDataPair = []
        for (let i = 1; i <= 5; i++) {
            labelDataPair[i] = document.createElement('div')
            labelDataPair[i].classList.add('list-data-pair')
        }
        //Items
        const date = document.createElement('h2')
        const weatherIcon = document.createElement('img')
        const conditionText = document.createElement('p')
        const avgTemp = document.createElement('p')
        const chanceRain = document.createElement('p')
        const humidity = document.createElement('p')
        const uv = document.createElement('p')
        //labels
        const avgTempLbl = document.createElement('p')
        const chanceRainLbl = document.createElement('p')
        const humidityLbl = document.createElement('p')
        const uvLbl = document.createElement('p')
        //Add content
        //Items
        date.textContent = forecastData.date
        weatherIcon.src = 'http:' + forecastData.day.condition.icon
        conditionText.textContent = forecastData.day.condition.text
        avgTemp.textContent = forecastData.day.avgtemp_c + '°'
        uv.textContent = forecastData.day.uv
        humidity.textContent = forecastData.day.avghumidity + '%'
        //Labels
        avgTempLbl.textContent = 'Average Temperature:'
        uvLbl.textContent = 'Average UV Index:'
        humidityLbl.textContent = 'Average Humidity:'  
        //Add classes/ids
        dataLine.id = 'data-list-line'
        //Append elements
        labelDataPair[1].appendChild(weatherIcon)
        labelDataPair[1].appendChild(conditionText)
        labelDataPair[2].appendChild(avgTempLbl)
        labelDataPair[2].appendChild(avgTemp)
        labelDataPair[3].appendChild(chanceRainLbl)
        labelDataPair[3].appendChild(chanceRain)
        labelDataPair[4].appendChild(humidityLbl)
        labelDataPair[4].appendChild(humidity)
        labelDataPair[5].appendChild(uvLbl)
        labelDataPair[5].appendChild(uv)
        labelDataPair.forEach(labelData => content.appendChild(labelData))
        dataLine.appendChild(date)
        dataLine.appendChild(content)
        forecastDomListContainer.appendChild(dataLine)
    })
    return forecastDomListContainer
}
