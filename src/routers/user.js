const express = require('express');
const { login, createUser } = require('../controllers/user.js')

const router = express.Router();

router.post('/login', login)
router.post('/sign-up', createUser)

module.exports = router;
