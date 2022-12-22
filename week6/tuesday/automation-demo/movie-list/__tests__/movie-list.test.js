const {Builder, Capabilities } = require("selenium-webdriver")

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async() => {
    await driver.get('file:///C:/Users/kiran/Desktop/devmountain/week6/tuesday/automation-demo/movie-list/index.html')
})

afterAll(async() => {
    await driver.quit()
})

describe('movie-list tests', async() => {
    test('should be able to add a movie', async() => {
        await addMovie(driver,'Encanto')
        //will prevent any actions for 5 seconds
        await driver.sleep(5000)
    }) 






})