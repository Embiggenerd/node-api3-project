const validateUserId = async (req, res, next) => {
    try {
        const idCheck = await getById(req.params.id)

        if (idCheck.length === 0) {
            return res.status(400).json({ messsage: "invalid user id" })
        }
        req.id = req.params.id
        next()
    } catch (e) {
        next(e)
    }
}

const validateUser = async (req, res, next) => {
    try {
        if (!req.body) {
            res.status(400).json({ message: "missing user data" })
            return
        }

        if (!req.body.name) {
            res.status(400).json({ message: "missing required name firled" })
            return
        }
        next()

    } catch (e) {
        next(e)
    }
}

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
    validateUser,
    validateUserId,
    validatePost
}