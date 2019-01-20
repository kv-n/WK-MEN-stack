const express = require('express');
const dogRouter = express.Router()
//lets files know that this file is full of routers
//method has to have capital R for it to work, acting like a constructor, making a new instance of router

//MODEL DATA
const Dog = require('../models/dogs')

//7 routes //2 resourceful (rendering a page or form/data payload) // 5 are restful (transfering data from one place to another)

//Index Route
dogRouter.get('/', (req, res) => {
    //everything inside is a controller
    Dog.find({}, (err, allDogs) => {
        if (err) {
            res.send(err);
        } else {
            res.render('index.ejs', {
                dogs: allDogs
            });
        }
    })
});

//New Route
dogRouter.get('/new', (req, res) => {
    res.render('new.ejs');
});

//Create Route (form)
dogRouter.post('/', (req, res) => {
    Dog.create(req.body, (err, createDog) => {
        if (err) {
            res.send(err);
        } else {
            console.log(createDog + ' has been added to the database.');
            res.redirect('/dogs');
        }
    })
});

//Edit Route
dogRouter.get('/:id/edit', (req, res) => {
Dog.findById(req.params.id, (err, editDog) => {
    if (err) {
        res.send(err)
    } else {
        console.log(editDog)
        res.render('edit.ejs', {
            dog: editDog
        })
    }
})
});

//Update Route
dogRouter.put('/:id', (req, res) => {

});

//Show Route
dogRouter.get('/:id', (req, res) => {
    Dog.findById(req.params.id, (err, foundDog) => {
        if (err) {
            res.send(err);
        } else {
            res.render('show.ejs', {
                dog: foundDog
            })
        }
    })
});

//Delete Route
dogRouter.delete('/:id', (req, res) => {
    Dog.findOneAndRemove(req.params.id, (err, deletedDog) => {
        if (err) {
          res.send(err)
        } else {
          console.log(deletedDog)
          res.redirect('/dogs');
        }
      })

});

module.exports = dogRouter
//exporting router we set at the top



