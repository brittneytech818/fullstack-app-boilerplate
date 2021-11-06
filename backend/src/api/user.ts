import {db} from '../db';

export async function getFirstUser() {
  const users = await db.user.findMany({
    select: {id: true, firstName: true, lastName: true},
    orderBy: {createdAt: 'asc'},
    take: 1
  });

  return users[0];
}
