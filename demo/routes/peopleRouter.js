const express = require('express')

// create our Router object
const peopleRouter = express.Router()

// import people controller functions
const peopleController = require('../controllers/peopleController')

// add a route to handle the GET request for all people data
peopleRouter.get('/history', peopleController.getAllPeopleData)

// add a route to handle the GET request for one data instance
peopleRouter.get('/history/:author_id', peopleController.getDataById)

peopleRouter.post('/patient/addData', peopleController.insertData)

// export the router
module.exports = peopleRouter
