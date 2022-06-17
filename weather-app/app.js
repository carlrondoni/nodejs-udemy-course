const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=1fa83ada43d71f6ee0b06f0d0893b448&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    const data = response.body.current
    console.log(data.weather_descriptions[0] + '. It is currently ' + data.temperature + ' degrees out. It feels like ' + data.feelslike + ' degrees out.')
})

// geocoding
// address -> lat/long -> weather

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2FybGRldiIsImEiOiJjbDRpeWc5OGEwZHp2M2ptbmV5NTF1anJjIn0.CavwdyEdLvN1IPaj2qAZ7g&limit=1'

request({ url: geocodeUrl, json: true }, (error, response) => {
    const data = response.body.features[0]
    console.log(data.center[1] + ',' + data.center[0])
})