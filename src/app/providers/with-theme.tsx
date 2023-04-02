import { ThemeProvider } from '@emotion/react';
import * as theme from 'app/theme';

export const withTheme = (Component: () => JSX.Element) => () =>{
    return (
        <ThemeProvider theme={theme}>
            <Component/>
        </ThemeProvider>
    )
}