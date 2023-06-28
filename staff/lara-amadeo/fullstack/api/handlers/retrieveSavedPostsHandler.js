const { retrieveToken } = require('../helpers')
const { retrieveSavedPosts } = require('../logic')

module.exports = (req, res) => {
    try {
        const userId = retrieveToken(req)

        retrieveSavedPosts(userId)
            .then(posts => res.status(200).json({ posts }))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}