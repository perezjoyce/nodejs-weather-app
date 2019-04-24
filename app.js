const request = require('request')
const chalk = require('chalk')
const geocode = require('./utils/geocode')


geocode('Philadelphia', (error, data) => { 
    console.log('Error: ', error)
    console.log('Data: ', data)
})

    // const url = "https://api.darksky.net/forecast/3a86fdc7e15ad649157a33abfee09437/37.8267,-122.4233?units=si&lang=de"

//argument 1: options object outlines what we want to do
//argument 2: function to run once the data is available
// request({ url: url, json: true }, (error, response) => {
//     //no need to parse because we set request package's json to true

//     // console.log(error); //check for existence of error object

//     if(error) {
//         console.log(chalk.red.bold.inverse("Unable to connect to weather service!"))
//     } else if (response.body.error) {
//         //if there is a low level os error, print the following message
//         console.log(chalk.blue.bold.inverse("Unable to find location"))

//     } else {
//         const temp = response.body.currently.temperature 
//         const preciptProb = response.body.currently.precipProbability 
//         console.log(
//             response.body.daily.data[0].summary
//         +    " It is currently " 
//         +  temp 
//         + " degrees Celsius out. There is a " 
//         + preciptProb 
//         + "% chance of rain.")
//     }
// })

