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
    console.log('req,body', req.body)
    try {
        if (!req.body) {
            res.status(400).json({ message: "missing user data" })
            return
        }

        if (!req.body.name) {
            res.status(400).json({ message: "missing required name fieled" })
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
}