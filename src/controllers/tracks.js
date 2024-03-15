const { findTrackByIdDb } = require('../domains/tracks.js')

const tracks = async (req, res) => {
    const { id } = req.body
    const findTrackById = await findTrackByIdDb(id)

    if (findTrackById) {
        console.log('found')
    }

    return res.status(201).json({ message: "Track added" })
}

module.exports = { tracks }
