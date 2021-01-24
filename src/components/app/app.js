import React from 'react';
import {ThemeProvider,CssBaseline} from '@material-ui/core';
import createTheme from "./app-theme/app.theme";
import Router from './../../router'

export default function App(){
    const theme = createTheme();
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
                <div>
                    <Router/>
                </div>
        </ThemeProvider>
    );
}
