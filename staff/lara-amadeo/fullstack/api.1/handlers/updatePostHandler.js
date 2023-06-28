const { extractToken } = require('../helpers')
const { updatePost } = require('../logic')

module.exports = (req, res) => {
    try {
        const userId = extractToken(req)

        const { postId } = req.params
        const { image, text } = req.body
        updatePost(userId, postId, image, text, error => {
            if (error) {
                res.status(400).json({ error: error.message })

                return
            }

            res.status(204).send()
        })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}