const request = require('postman-request');

const geocode = (address, callback)=>{
    const url = 'https://geocode.maps.co/search?q=' + encodeURIComponent(address) +'&api_key=685e5d94195ba415990672bahebcd78'

    request({url, json:true}, (error, response)=>{
        if (error){
            callback('Unable to connect to location services!')
        }
        else if (response.body.length===0){
            callback('Invalid location searched.')
        }
        else{
            callback(undefined, {
                latitude: response.body[0].lat,
                longitude: response.body[0].lon,
                name: response.body[0].display_name
            })
        }
    })
}

module.exports = geocode