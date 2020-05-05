const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2hhc2hhbmthYWxzZSIsImEiOiJjazlqdWl3N3owMTV2M21waGdsMGR4eWcyIn0.uTtv2y8GNfHjPU5PClVdMA&limit=1'

    request({ url, json: true }, (error, { body } = {}) => {
        if(error) {
            callback('Unable to connect to location services', undefined)
        } else if(body.features.length === 0) {
            callback('Unable to find the location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode