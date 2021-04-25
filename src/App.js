import React from 'react';
import Header from './components/Header'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/Global'
import { lightTheme, darkTheme } from './styles/Theme'
import CardsGrid from './components/CardsGrid';

export default function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Helmet>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
            </Helmet>
            <GlobalStyles />
            <Header/>
            <CardsGrid />
        </ThemeProvider>
    );
}
