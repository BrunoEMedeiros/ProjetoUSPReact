import styled from "styled-components";
import { defaultThemeColor } from "../../utils/colors";

export const Container = styled.div`
    
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 2;
    
    display: flex;
    justify-content: center;

    border-radius: 1rem;
    border: 0.5rem solid #333;
    border-left: none;
    border-top: none;

    background: whitesmoke;
`;