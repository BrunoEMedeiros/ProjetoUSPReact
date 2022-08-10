import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    scrollbar-width: thin;
    scrollbar-color: #7400b8 black;
}

*::-webkit-scrollbar {
    width: 12px;
}

*::-webkit-scrollbar-track {
    background: black;
}

*::-webkit-scrollbar-thumb {
    background-color: #7400b8;
    border-radius: 2rem;
    border: 0.5rem solid black;
}

html, body, #root{
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;

    text-rendering: optimizeLegibility;
}

*,button, input{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;    
}

html{
    font-size: 70%;
}

body{
    padding: 1em;
}

`;
