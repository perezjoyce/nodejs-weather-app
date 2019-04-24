const request = require('request')
const chalk = require('chalk')

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

const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoiam95Y2VwZXJleiIsImEiOiJjanV1eW14OXAwZWg4NDlueTZwcTZvOGduIn0.0YdkKZKKRKrcazOQlBWJvg&limit=1"
// const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1Ijoiam95Y2VwZXJleiIsImEiOiJjanV1eW14OXAwZWg4NDlueTZwcTZvOGduIn0.0YdkKZKKRKrcazOQlBWJvg&limit=1"

request({ url : geocodeURL, json: true}, (error, response) => {

    if(error){
        console.log(chalk.red.inverse("Unable to connect!"))
    } else if (response.body.features.length === 0) {
        console.log(chalk.blue.inverse("No matching result!"))
    } else {
        // console.log(response.body.features.length) // 0
        const long = response.body.features[0].center[0]
        const lat = response.body.features[0].center[1]
        const searchKey = response.body.query
        const place = searchKey.join().replace(",", " ")
        console.log("The longitude and latitude of " 
            + place 
            + " is " 
            + long 
            + " and " 
            + lat 
            + ", respectively.")
    }
})