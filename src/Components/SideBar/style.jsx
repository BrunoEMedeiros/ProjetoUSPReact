import styled from "styled-components";
import { byzantium_light, byzantium_medium, darkThemeColor, oxfordBlue } from "../../utils/colors";
import { byzantium } from "../../utils/colors";

export const Container = styled.div`
    width: 20%;
    height: 100% !important;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProfileContainer = styled.div`

    width: 100%;
    height: 70%;

    background-color: ${byzantium};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    border-radius: 2rem;
`;

export const Avatar = styled.img`

    background-color: white;
    height: 19rem;
    width: 19rem;
    border-radius: 7rem;
    margin-top: 10%;

    box-shadow: -13px 10px 7px 1px rgba(0,0,0,0.55);
`;

export const ProfileInfo = styled.div`

    width: 100%;

`;
export const Name = styled.h1`
    width: 100%;

    display: flex;
    justify-content: center;

    background-color: ${byzantium_medium};
    color: whitesmoke;
    font-size: 4rem;
   
`;

export const Level = styled.h2`
    width: 100%;

    display: flex;
    justify-content: center;
    
    background-color: ${byzantium_light};
    color: whitesmoke;

`;

export const LinksContainer = styled.div`
    background: ${oxfordBlue};

    height: 100%;
    width: 100%;

    border: none;

    display: flex;
    flex-direction: column;

`;

export const Links = styled.ul`
    
    width: 100%;

    display: flex;
    flex-direction: column;
    
    list-style-type: none;
`;
export const Link = styled.li`

    flex-grow: 1;

    display: flex;

    align-items: center;

    background-color: ${darkThemeColor};

    cursor: pointer;

    color: whitesmoke;

    padding: 2rem;

    color: whitesmoke;
    
    font-size: 1.5rem;

    svg{
        font-size: 2.5rem;
    }

    a{
        text-decoration: none;
        color: black;
    }

    &:hover{
        background-color: rgba(154, 0, 228, 0.6);
    }


`;