const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt')

async function seed() {

    const username = 'User'
    const password = 'Password123'
    const first_name = 'John'
    const last_name = 'Doe'
    const display_name = 'musicman'

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
        data: {
            username,
            password: hashedPassword
        }
    });

    const profile = await prisma.profile.create({
        data: {
            first_name,
            last_name,
            display_name,
            user: {
                connect: {
                    id: 1
                }
            }
        }
    })

    console.log('User created', user)
    console.log('Profile created', profile)

    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })