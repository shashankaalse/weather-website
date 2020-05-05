const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1e979f99ffb1d69247f3aa3a0c0e1eb0&query=' + latitude + ',' + longitude + '&units=m'
    request({ url, json: true }, (error, { body } = {}) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out")
        }
    })
}

module.exports = forecast