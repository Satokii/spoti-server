import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const findUserDb = async (username) => await prisma.user.findUnique({
    where: { username }
})


module.exports = { findUserDb }