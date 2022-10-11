import { createGlobalStyle } from 'styled-components';
import { mobile_max_width, tablet_min_width } from '../utils/responsivity';

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;    
}

html, body, #root{
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;

    text-rendering: optimizeLegibility;
}

html{
    font-size: 62.5%;

}

body{
    font-size: 1rem;
}

#root{
    padding: 1rem;
}

@media (max-width:${tablet_min_width}) {
    html{
        font-size: 50.5%;
    }
}

@media (max-width:${mobile_max_width}){
    html{
        font-size: 50.5%;
    }
}

`;
