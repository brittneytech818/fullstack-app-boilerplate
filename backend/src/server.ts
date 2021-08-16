import fastify from 'fastify';
import cors from 'fastify-cors';

import {getFirstUser} from './db';

export async function start() {
  const server = fastify({logger: {prettyPrint: true}});

  server.register(cors);

  server.get('/users/first', async () => {
    return await getFirstUser();
  });

  await server.listen(3001);
}
