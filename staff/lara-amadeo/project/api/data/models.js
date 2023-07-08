const mongoose = require('mongoose')

const { Schema, Schema: { Types: { ObjectId } }, model } = mongoose

const user = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    avatar: {
        type: String
    },
    availability: {
        type: [Object],
        default: []
    },
    likedChefs: {
        type: [ObjectId],
        ref: 'User',
        default: []
    },
    meals: {
        type: [Object],
        ref: 'Meal',
        default: []
    }
    ,
    reviews: {
        type: [Object],
        default: []
    }
})

const meal = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    images: {
        type: [String],
        required: true,
    },
    text: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    category: {
        type: [String],
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },
    bestBefore: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        require: true,
        default: 0
    }
})

const User = model('User', user)
const Meal = model('Meal', meal)

module.exports = {
    User,
    Meal
}