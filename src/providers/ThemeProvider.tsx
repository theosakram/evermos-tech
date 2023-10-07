import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';

import theme from '@/uikit/theme';

export const ThemeProvider = (props: PropsWithChildren) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <ColorModeProvider options={{ initialColorMode: 'light', useSystemColorMode: false }}>
        {props.children}
      </ColorModeProvider>
    </ChakraProvider>
  );
};
