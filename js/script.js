



const getRealtimeData = async (searchTerm) => {
    const realtimePromise = await fetch('https://api.weatherapi.com/v1/current.json?key=fc12493872cf47e9b0c132053233110&q=auto:ip')
    const realtimeData = await realtimePromise.json()
    return realtimeData
}


getRealtimeData()


