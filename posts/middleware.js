const validatePost = async (req, res, next) => {
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

module.exports = {
    validatePost
}