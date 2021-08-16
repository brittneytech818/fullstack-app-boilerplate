import React from 'react';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';

import {HelloWorld} from './hello-world';

const queryClient = new QueryClient({defaultOptions: {queries: {refetchOnWindowFocus: false}}});

export function Application() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <HelloWorld />
      </div>
    </QueryClientProvider>
  );
}
