import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import theme from "../uikit/theme";
import { PropsWithChildren } from "react";

export const ThemeProvider = (props: PropsWithChildren) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <ColorModeProvider
        options={{ initialColorMode: "light", useSystemColorMode: false }}
      >
        {props.children}
      </ColorModeProvider>
    </ChakraProvider>
  );
};
