import {PrismaClient} from '@prisma/client';
import fastify from 'fastify';
import cors from 'fastify-cors';

export async function app() {
  const prisma = new PrismaClient();

  const app = fastify({logger: {prettyPrint: true}});

  app.register(cors);

  app.get('/users/first', async () => {
    return (await prisma.user.findMany({orderBy: {createdAt: 'asc'}, take: 1}))[0];
  });

  await app.listen(3001);
}
