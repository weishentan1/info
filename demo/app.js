const exphbs = require('express-handlebars')

// Import express
const express = require('express')
// Set your app up as an express app
const app = express()

// configure Handlebars
app.engine(
    'hbs',
    exphbs.engine({
        defaultlayout: 'main',
        extname: 'hbs',
    })
)
// set Handlebars view engine
app.set('view engine', 'hbs')

app.use(express.static('public'))

// Set up to handle POST requests
app.use(express.json()) // needed if POST data is in JSON format
app.use(express.urlencoded({ extended: false })) // only needed for URL-encoded input

// link to our router
const peopleRouter = require('./routes/peopleRouter')

// Tells the app to send the string: "Our demo app is working!" when you hit the '/' endpoint.
app.get('/', (req, res) => {
    res.render('index.hbs')
})

// the demo routes are added to the end of the '/people' path
app.use('/patient', peopleRouter)

app.get('/patient', (req,res) => {
    res.render('patient.hbs')
})

app.get('/patient/sign_in', (req,res) => {
    res.render('signIn.hbs')
})

app.get('/patient/addData', (req,res) => {
    res.render('addData.hbs')
})

// Tells the app to listen on port 3000 and logs that information to the console.
app.listen(process.env.PORT || 3000, () => {
    console.log('The library app is running')
})

require('./models')
