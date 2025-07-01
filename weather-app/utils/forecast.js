const request = require('postman-request');

const forecast = (latitude, longitude, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=8b448066a3816b74aec4796512ee14f3&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude);

    request({url, json: true}, (error, { body })=>{
        if (error){
            callback('API error.');
        }
        else if (body.error){
            callback('Invalid query, please check coordinates given.');   
        }
        else{
            callback(undefined, {
                time: body.current.observation_time,
                temperature: body.current.temperature
            });
        }
    })
}

module.exports = forecast