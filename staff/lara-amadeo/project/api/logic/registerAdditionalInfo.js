const { validators: { validateText, validateEmail, validatePassword }, errors: { DuplicityError } } = require('../../com')
const { User } = require('../data/models')

module.exports = function registerAdditionalInfo(userId, description, tags, location, availability) {

    validateText(username)


    return User.updateOne({})

}