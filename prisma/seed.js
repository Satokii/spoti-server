const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const user = await prisma.user.create({
        data: {
            username: 'User',
            password: 'Password123'
        }
    });

    console.log('User created', user);

    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })