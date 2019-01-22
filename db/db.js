//CONNECTING TO MONGO TO OUR DATABASE

const mongoose = require('mongoose');

//name our database
const connectionString = 'mongodb://localhost/dog';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
})

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}.`)
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose ${err}.`)
});

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose disconnected from ${connectionString}.`)
});