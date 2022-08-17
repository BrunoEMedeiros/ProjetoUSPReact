import styled from "styled-components"
import { defaultThemeColor } from "../utils/colors";

export function Badge({ content }){
    return(
        <Div>{content}</Div>
    )
}

const Div = styled.div`


    display: flex;

    justify-content: center;

    border-radius: 1rem;

    font-weight: 500;

    color: white;

    cursor: pointer;

    font-size: 2rem;
    
`;