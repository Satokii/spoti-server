const { findTrackByIdDb, addTrack, updateTrackTally } = require('../domains/tracks.js')

const tracks = async (req, res) => {
    const { track_id } = req.body
    const findTrackById = await findTrackByIdDb(track_id)

    if (!findTrackById) {
        const newTrack = await addTrack(track_id)
        return res.status(201).json({ track: newTrack })
    }

    if (findTrackById) {
        const updatedTrack = await updateTrackTally(track_id)
        return res.status(201).json({ track: updatedTrack })
    }

    return res.status(500).json({ error: "Server error, please try again." })
}

module.exports = { tracks }
