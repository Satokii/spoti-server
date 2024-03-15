const express = require('express');
const { tracks, getAllTracks } = require('../controllers/tracks.js')

const router = express.Router();

router.post('/tracks', tracks)
router.get('/tracks', getAllTracks)

module.exports = router;
