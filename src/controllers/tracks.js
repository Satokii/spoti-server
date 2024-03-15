const { findTrackByIdDb, addTrack, updateTrackTally, getAllTracksDb } = require('../domains/tracks.js')

const tracks = async (req, res) => {
    const { track_id, track_name } = req.body
    const findTrackById = await findTrackByIdDb(track_id)

    if (!findTrackById) {
        const newTrack = await addTrack(track_id, track_name)
        return res.status(201).json({ track: newTrack })
    }

    if (findTrackById) {
        const updatedTrack = await updateTrackTally(track_id, track_name)
        return res.status(201).json({ track: updatedTrack })
    }

    return res.status(500).json({ error: "Server error, please try again." })
}

const getAllTracks = async (req, res) => {

    try {
        const tracks = await getAllTracksDb()
        return res.status(200).json({ tracks })
    }
    catch {
        return res.status(500).json({ error: 'Error retrieving all tracks'})
    }

}

module.exports = { tracks, getAllTracks }
