const express = require('express');
const { tracks } = require('../controllers/tracks.js')

const router = express.Router();

router.post('/tracks', tracks)

module.exports = router;
