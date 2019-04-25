const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const chalk = require('chalk')

const address = process.argv[2]

    if(!address) {
        return console.log(chalk.red.inverse("Please provide address!"))
    } 
        geocode(address, (error, { latitude, longitude, location }) => { 

            if (error) {
                return console.log(error)
            } 

            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                    return console.log(error)
                }
                
                console.log(chalk.yellow.bold.underline(location))
                console.log(chalk.yellow(forecastData))  
            })   
        })




