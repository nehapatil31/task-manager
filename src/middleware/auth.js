const jwt = require("jsonwebtoken")
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer', "")
        const decoded = jwt.verify(token.trim(), 'thisismynewcourse')
        
        const user = await User.findOne({ _id: decoded._id , 'tokens.token': token.trim()})

        if (!user) {
            throw new Error()
        }

        req.user = user
        req.token = token.trim()
        next()
    } catch (e) {
        res.status(401).send('Error: Authentication failed!')
    }
}

module.exports = auth