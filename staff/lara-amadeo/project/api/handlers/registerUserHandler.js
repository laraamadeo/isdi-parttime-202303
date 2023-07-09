const { registerUser } = require('../logic')
const { handleErrors } = require('../helpers')

module.exports = handleErrors((req, res) => {

    const { name, username, email, password } = req.body

    return registerUser(name, username, email, password)
        .then(() => res.status(201).send())
})