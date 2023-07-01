const { retrieveToken } = require('../helpers')
const { deletePost } = require('../logic')
const { handleErrors } = require('../helpers')


module.exports = handleErrors((req, res) => {
    const { postId } = req.params

    const userId = retrieveToken(req)

    return deletePost(userId, postId)
        .then(() => res.status(204).send())
})