// create schema for subscriber models

const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subscribedtoChannel: {
        type: String,
        required: true,
    },
    subscriberDate: {
        type: Date,
        required: true,
        default: Date.now

    }
})

// export schema
module.exports = mongoose.model('Subscriber', subscriberSchema)