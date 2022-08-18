import styled from "styled-components";
import { darkThemeColor } from "../../utils";

export const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #735bf2;

    padding: 1rem;

    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.5);
    
    margin-top: 1rem;
    margin-bottom: 1rem;
`;


export const Name = styled.h3`
    color: whitesmoke;
    font-size: 2rem;
`;

export const Buttons = styled.ul`

    display: flex;
    gap: 1rem;

    list-style: none;
`;

export const OptionButton = styled.li`

    color: whitesmoke;

    cursor: pointer;

    &:hover{
        color: ${darkThemeColor};
    }
`;
