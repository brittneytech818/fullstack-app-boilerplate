import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function getFirstUser() {
  const users = await prisma.user.findMany({orderBy: {createdAt: 'asc'}, take: 1});

  return users[0];
}
