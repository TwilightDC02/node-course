const request = require('postman-request');

const forecast = (latitude, longitude, callback) =>{
    const weatherURL = 'http://api.weatherstack.com/current?access_key=8b448066a3816b74aec4796512ee14f3&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude);

    request({url: weatherURL, json: true}, (error, response)=>{
        if (error){
            callback('API error.');
        }
        else if (response.body.error){
            callback('Invalid query, please check coordinates given.');   
        }
        else{
            callback(undefined, {
                time: response.body.current.observation_time,
                temperature: response.body.current.temperature
            });
        }
    })
}

module.exports = forecast