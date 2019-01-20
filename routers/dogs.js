const express = require('express');
const dogRouter = express.Router()
//lets files know that this file is full of routers
//method has to have capital R for it to work, acting like a constructor, making a new instance of router

//MODEL DATA
const Dog = require('../models/dogs')

//7 routes //2 resourceful// 5 are restful

//Index Route
dogRouter.get('/', (req, res) => {
//everything inside is a controller

});

//New Route
dogRouter.get('/new', (req, res) => {
    res.render('new.ejs');
});

//Create Route (form)
dogRouter.post('/', (req, res) => {
    Dog.create(req.body, (err, createDog) => {
        if (err){
            res.send(err);
        } else {
            console.log(createDog + ' has been added to the database.');
            res.redirect('/dogs');
        }
    })
});

//Edit Route
dogRouter.get('/:id/edit', (req, res) => {

});

//Update Route
dogRouter.put('/:id', (req, res) => {

});

//Show Route
dogRouter.get('/:id', (req, res) => {

});

//Delete Route
dogRouter.delete('/:id', (req, res) => {

});

module.exports = dogRouter
//exporting router we set at the top



