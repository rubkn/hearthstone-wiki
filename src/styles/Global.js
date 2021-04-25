import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root {
        --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
  
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }
  
    body {
        background-color: #f7f7f7;
        min-height: 100vh;
        font-family: 'Lato', sans-serif;
    }
`