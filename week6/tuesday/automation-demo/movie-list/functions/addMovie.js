const {By} = require('selenium-webdriver')

const addMovie = async(driver,movie) => {

    //get the input element and input the movie inception
    await driver.findElement(By.xpath('//input[@placeholder="Add Movie"]')).sendKeys(`${movie}`)

//
await driver.findElement(By.xpath('//button')).click()

//find the li element
const movie = await driver.findElement(By.xpath('//li'))
//use the .isDisplayed method on selenium to check if an emlemet is displayed on the browser, evalutaes yo true or false

const displayed = movieDisplay.isDisplayed()

expect(displayed).toBeTruthy()

}

const verifyMovie = async(driver,movie) => {
    
}


module.exports = {
    addMovie
}