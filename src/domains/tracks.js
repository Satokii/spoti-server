const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const findTrackByIdDb = async (id) => await prisma.tracks.findUnique({
    where: { id }
})

const addTrack = async (id) => await prisma.tracks.create({
    data: {
        track_id: id,
        tally: 1
    }
})

const updateTrackTally = async (id) => await prisma.tracks.update({
    where: { id },
    data: {
        tally: {
            increment: 1
        }
    }
})

module.exports = { findTrackByIdDb, addTrack, updateTrackTally }