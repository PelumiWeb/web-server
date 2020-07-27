const request = require('request')

const forecacst = (lattitude, longitude, callback) => {
const url = `https://samples.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=439d4b804bc8187953eb36d2a8c26a02`
request({url, json: true}, (error, response) => {
    if (error) {
        callback('unable to connect to the internet', undefined)
    } else if (response.body.error) {
        callback('invalid search, please try again', undefined)
    } else {
        callback(undefined, `it is currently ${response.body.main.temp} degrees out. There is minimun temperature of ${response.body.main.pressure}`)
    }

})

}

module.exports = forecacst