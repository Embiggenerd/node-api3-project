

const validatePost = async (req, res, next) => {
    console.log('req.body', req.body)
    try {
        if (!req.body) {
            req.status(400).json({ message: "missig post data" })
            return
        }
        if (!req.body.text) {
            req.status(400).json({ message: "missing required text field" })
            return
        }
        next()
    } catch (e) {
        next(e)
    }
}

const validatePostId = async (req, res, next) => {
    try {
        req.postID = req.params.id
        next()
    } catch (e) {
        next(e)
    }
}

module.exports = {
    validatePost,
    validatePostId
}