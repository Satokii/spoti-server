const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET
const bcrypt = require('bcrypt')

const { findUserDb } = require('../domains/user.js')

const login = async (req, res) => {
    const { username, password } = req.body

    const foundUser = await findUserDb(username)

    if (!foundUser) {
        return res.status(401).json({ error: 'Invalid username or password.' })
    } 

    const passwordsMatch = await bcrypt.compare(password, foundUser.password)

    if (!passwordsMatch) {
        return res.status(401).json({ error: 'Invalid username or password.' })
    } 

    const token = jwt.sign({ username }, secret)
    return res.status(201).json({ token })
}

module.exports = { login }