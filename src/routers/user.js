const express = require('express');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET

const router = express.Router();

const dummyUser = {
    username: 'User',
    password: 'Password123'
}

router.post('/login', (req, res) => {
    const { username, password } = req.body

    if (username === dummyUser.username && password === dummyUser.password) {
        const token = jwt.sign(dummyUser, secret)
        return res.status(201).json({ token })
    }
    
    return res.status(401).json({ error: "incorrect login credentials provided"})
})

module.exports = router;
