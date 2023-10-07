import type { PropsWithChildren } from 'react';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';

const queryCache = new QueryCache();
export const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      staleTime: 3 * 60 * 1000, // 3 minutes
      refetchOnWindowFocus: false,
      cacheTime: 5 * 60 * 1000, // 5 minutes
      retry: false,
    },
  },
});

export const QueryProvider = (props: PropsWithChildren) => {
  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
};
