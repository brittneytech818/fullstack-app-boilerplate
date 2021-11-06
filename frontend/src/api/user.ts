import {client} from '../client';

export async function getFirstUser() {
  return (await client.fetch('users/first')) as {id: string; firstName: string; lastName: string};
}
