import { QueryProvider } from "../providers/QueryProvider";
import { ThemeProvider } from "../providers/ThemeProvider";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <QueryProvider>
        <Component {...pageProps} />
      </QueryProvider>
    </ThemeProvider>
  );
}

export default MyApp;
