import React from 'react';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const queryClient = new QueryClient({defaultOptions: {queries: {refetchOnWindowFocus: false}}});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <HelloWorld />
      </div>
    </QueryClientProvider>
  );
}

function HelloWorld() {
  const {
    data: user,
    isLoading,
    error
  } = useQuery('firstUser', async () => {
    const response = await fetch(`${BACKEND_URL}users/first`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error('An error occurred while fetching data from the backend');
    }

    return data;
  });

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
