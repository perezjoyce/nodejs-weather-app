const request = require('request')
const chalk = require('chalk')

const geocode = (address, callback) => {
    /*pass address into a function called encodeURIComponent 
    to prevent the program from crashing when someone location 
    that contains special characters that means something in a url structure like ? */
    const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" 
    + encodeURIComponent(address) 
    + ".json?access_token=pk.eyJ1Ijoiam95Y2VwZXJleiIsImEi" 
    + "OiJjanV1eW14OXAwZWg4NDlueTZwcTZvOGduIn0.0YdkKZKKRKrcazOQlBWJvg&limit=1"

    request({ url : geocodeURL, json: true}, (error, response) => {

            if(error){
                callback(chalk.red.inverse("Unable to connect!", undefined))
            } else if (response.body.features.length === 0) {
                callback(chalk.blue.inverse("No matching result!"), undefined)
            } else {
                // console.log(response.body.features.length) // 0
                const long = response.body.features[0].center[0]
                const lat = response.body.features[0].center[1]
                const searchKey = response.body.query
                const place = searchKey.join().replace(",", " ")
                callback(undefined, "The longitude and latitude of " 
                    + place 
                    + " is " 
                    + long 
                    + " and " 
                    + lat 
                    + ", respectively.")
            }
        })
}

module.exports = geocode