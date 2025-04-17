'use client';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/app/styles/globals';
import { theme } from '@/app/styles/theme';
import StyledComponentsRegistry from './lib/styled-components-registry';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}