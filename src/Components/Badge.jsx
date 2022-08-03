import styled from "styled-components"
import { defaultThemeColor } from "../utils";

export function Badge({ content }){
    return(
        <Div>{content}</Div>
    )
}

const Div = styled.div`

    padding: 0% .3rem 1rem;
    border-radius: 1rem;
    font-weight: 500;
    color: white;
    cursor: pointer;
    background-color: ${defaultThemeColor};
    
`;