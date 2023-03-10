const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
app.use(express.json())

const {PORT, ROLLBAR_KEY} = process.env;

app.use(cors())

var Rollbar = require('rollbar')
 var rollbar = new Rollbar({
   accessToken: ROLLBAR_KEY,
   captureUncaught: true,
   captureUnhandledRejections: true,
 })

const students = ['Jimmy', 'Timothy', 'Jimothy']

app.get('/', (req, res) => {
    rollbar.info('someone is got thelist of students')
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/api/students', (req, res) => {
    res.status(200).send(students)
})

app.post('/api/students', (req, res) => {
   let {name} = req.body

   const index = students.findIndex(student => {
       return student === name
   })

   try {
       if (index === -1 && name !== '') {
           students.push(name)
           res.status(200).send(students)
       } else if (name === ''){
           rollbar.error('someone entered the blanket student')

           res.status(400).send('You must enter a name.')
       } else {
        rollbar.error('student already exists')
           res.status(400).send('That student already exists.')
       }
   } catch (err) {
    rollbar.error(err)  
    console.log(err)
   }
})

app.delete('/api/students/:index', (req, res) => {
    const targetIndex = +req.params.index
    rollbar.critical(`someone deleted ${students[targetIndex]}`)
    students.splice(targetIndex, 1)
    res.status(200).send(students)
})

const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server listening on ${port}`))
