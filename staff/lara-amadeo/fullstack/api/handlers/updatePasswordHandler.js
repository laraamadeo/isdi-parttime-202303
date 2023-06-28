const { retrieveToken } = require('../helpers')
const { updatePassword } = require('../logic')

module.exports = (req, res) => {
    try {
        const userId = retrieveToken(req)

        const { password, newPassword } = req.body

        updatePassword(userId, password, newPassword)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}