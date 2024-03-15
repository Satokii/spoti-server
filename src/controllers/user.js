const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET
const bcrypt = require('bcrypt')

const { findUserDb, createUserDb } = require('../domains/user.js')

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

const createUser = async (req, res) => {
    const { username, password } = req.body
    console.log(username)

    const foundUser = await findUserDb(username)

    if (foundUser) {
        return res.status(409).json({ error: 'Username is already in use.'})
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    try {
        const newUser = await createUserDb(username, hashedPassword)
        return res.status(201).json({ user: newUser})
    }
    catch {
        return res.status(500).json({ error: "Server error, please try again." })
    }
}

module.exports = { login, createUser }