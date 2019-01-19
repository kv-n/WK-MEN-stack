const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name: {type: String, required: true},
    breed: {type: String, required: true}
});

const Dog = mongoose.model('Dog', dogSechma)


module.exports = Dog