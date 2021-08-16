import React from 'react';
import {useQuery} from 'react-query';

import {getFirstUser} from '../client';

export function HelloWorld() {
  const {data: user, isLoading, error} = useQuery(['users', 'first'], getFirstUser);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Sorry, something went wrong.</p>;
  }

  return (
    <h1>
      Hello, {user.firstName} {user.lastName}!
    </h1>
  );
}
