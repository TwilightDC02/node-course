const chalk = require('chalk');
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js');

const location = process.argv[2]

if (!location){
    console.log('Please provide a location.');
}
else{
    geocode(location, (error, geodetails)=>{
    if (error){
        console.log(chalk.red.inverse(error));
    }
    else{
        console.log(geodetails.name + ' is found at: ' + geodetails.latitude + ', ' + geodetails.longitude);
        
        forecast(geodetails.latitude, geodetails.longitude, (error, weatherData)=>{
            if (error){
                console.log(chalk.red.inverse(error));                
            }
            else{
                console.log('The forecasted temperature is: ' + weatherData.temperature + ' at the time of ' + weatherData.time);    
            }
        })
    }
})
}