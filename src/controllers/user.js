const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET

const dummyUser = {
    username: 'User',
    password: 'Password123'
}

const login = async (req, res) => {
    const { username, password } = req.body

    if (username === dummyUser.username && password === dummyUser.password) {
        const token = jwt.sign(dummyUser, secret)
        return res.status(201).json({ token })
    }
    
    return res.status(401).json({ error: "incorrect login credentials provided"})
}

module.exports = { login }