import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
  --color-primary: #6DA5C0;
  --color-secondary: #E3C39D;
  --color-tertiary: #E5989B;
  --color-neutral: #F7F7F2;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    background-color: #fafaf5;
    font-family: 'Plus Jakarta Sans', sans-serif;
}

.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

`