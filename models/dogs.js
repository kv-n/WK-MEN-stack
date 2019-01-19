const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name: {type: String, required: true},
    breed: {type: String, required: true},
    age: Number,
    image: String,
});

const Dog = mongoose.model('Dog', dogSchema)


module.exports = Dog