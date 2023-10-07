import { Box } from '@chakra-ui/react';

import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import { QueryProvider } from '@/providers/QueryProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { NavbarContainer } from '@/uikit/containers/navbar';

const LoginGuard = dynamic(
  () =>
    import('../uikit/components/LoginGuard').then((comp) => comp.LoginGuard),
  { ssr: false },
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Evermos Technical</title>
      </Head>
      <ThemeProvider>
        <QueryProvider>
          <LoginGuard>
            <Box w="100%" minH="100vh" bg="gray.100">
              <NavbarContainer />
              <Component {...pageProps} />
            </Box>
          </LoginGuard>
        </QueryProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
