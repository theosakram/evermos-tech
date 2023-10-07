import Head from "next/head";

import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { QueryProvider } from "@/providers/QueryProvider";

const LoginGuard = dynamic(
  () =>
    import("../uikit/components/LoginGuard").then((comp) => comp.LoginGuard),
  { ssr: false }
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
            <Component {...pageProps} />
          </LoginGuard>
        </QueryProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
