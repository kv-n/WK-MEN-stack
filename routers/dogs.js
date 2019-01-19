const express = require('express');
const dogRouter = express.Router()
//lets files know that this file is full of routers
//method has to have capital R for it to work, acting like a constructor, making a new instance of router

//7 routes //2 resourceful// 5 are restful

//Index Route
dogRouter.get('/', (req, res) => {

});

//New Route
dogRouter.get('/new', (req, res) => {

});

//Create Route (form)
dogRouter.post('/', (req, res) => {

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



