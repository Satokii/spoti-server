const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const findTrackByIdDb = async (id) => await prisma.tracks.findUnique({
    where: { id }
})

module.exports = { findTrackByIdDb }