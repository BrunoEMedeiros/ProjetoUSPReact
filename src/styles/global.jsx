import { createGlobalStyle } from 'styled-components';
import { pageBackground } from '../utils/colors';

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, body{
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: Roboto;
}

html{
    font-size: 62.5%;
}

#root{
    background-color: ${pageBackground};
}

`;
