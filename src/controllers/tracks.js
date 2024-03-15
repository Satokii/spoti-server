const { findTrackByIdDb, addTrack, updateTrackTally } = require('../domains/tracks.js')

const tracks = async (req, res) => {
    const { id } = req.body
    const findTrackById = await findTrackByIdDb(id)

    if (!findTrackById) {
        const newTrack = await addTrack(id)
        return res.status(201).json({ track: newTrack })
    }

    if (findTrackById) {
        const updatedTrack = await updateTrackTally(id)
        return res.status(201).json({ track: updatedTrack })
    }

    return res.status(500).json({ error: "Server error, please try again." })
}

module.exports = { tracks }
