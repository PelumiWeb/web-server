const request = require('request')
const geoCode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoib2x1d2FwZWx1bWkyMSIsImEiOiJja2QxaHRoM24wdjE3MzRxdjJnNmZoam84In0.3ZhhK7EGGF783Rm8kwRM2w&limit=1`
    
    request({url: url, json: true}, (error, response) => {
    if (error) {
        callback('unable to connect to locational services!', undefined)
    }else if (response.body.features.length === 0) {
        callback('Unable to find location try another search', undefined)
    } else {
        callback(undefined, {
            long  : response.body.features[0].center[0],
            lat  : response.body.features[0].center[1],
            location: response.body.features[0].place_name
          
        })
      }
    })
 }

module.exports = geoCode