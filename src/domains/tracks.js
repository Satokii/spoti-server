const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const findTrackByIdDb = async (track_id) => await prisma.tracks.findUnique({
    where: { track_id }
})

const addTrack = async (track_id, track_name) => await prisma.tracks.create({
    data: {
        track_id,
        track_name,
        tally: 1
    }
})

const updateTrackTally = async (track_id, track_name) => await prisma.tracks.update({
    where: { track_id },
    data: {
        track_name,
        tally: {
            increment: 1
        }
    }
})

module.exports = { findTrackByIdDb, addTrack, updateTrackTally }