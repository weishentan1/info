// import people model
const { default: mongoose } = require('mongoose')
const { db } = require('../models/author')
const Author = require('../models/author')

// handle request to get all people data instances
const getAllPeopleData = async(req, res, next) => {
    try{
        const authors = await Author.find().lean()
        return res.render('allData', {data: authors})
    }catch(err){
        return next(err)
    }
}

// handle request to get one data instance
const getDataById = async(req, res, next) => { 
    try { 
        const author = await Author.findById(req.params.author_id).lean() 
        if (!author) { 
            // no author found in database

            return res.sendStatus(404) 
        } 
        // found person 
        return res.render('oneData', { oneItem: author }) 
    } catch (err) {
        return next(err) 
    } 
} 

const insertData = async(req,res,next) => {
    const data={
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };

    db.collection('authors').insertOne(data, function(err, result){
        console.log('Item inserted');
    })

    res.redirect('/patient')
}

// exports an object, which contain functions imported by router
module.exports = {
    getAllPeopleData,
    getDataById,
    insertData,
}
