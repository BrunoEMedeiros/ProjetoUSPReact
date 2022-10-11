import styled from "styled-components";
import { byzantium_light, headerColor, oxfordBlue, linksColor } from "../../utils/colors";
import { byzantium } from "../../utils/colors";
import FundoImg from '../../assets/fundo.jpg'


export const Container = styled.div`
   
    grid-row-start: 1;
    grid-row-end: 1;
    grid-column-start: 2;
    grid-column-end: 2;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-shadow: 4px 4px 0px black;
`;

export const ProfileContainer = styled.div`

    width: 100%;

    background-image: url(${FundoImg});
    background-repeat: no-repeat;
    background-size: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    border-top-left-radius: 12rem;
    border-top-right-radius: 12rem;
`;

export const Avatar = styled.img`

    background-color: white;
    height: 25rem;
    width: 25rem;
    border-radius: 50%;
    margin: 2rem;

    border: 0.7rem solid black;
`;

export const ProfileInfo = styled.div`
    width: 100%;
`;

export const Name = styled.h1`
    
    width: 100%;

    display: flex;
    justify-content: center;

    background-color: ${headerColor};
    color: whitesmoke;
    font-size: 8rem;

    padding: 1rem;

    border-radius: 2rem 2rem 0rem 0rem;
   
`;

export const Level = styled.h2`
    width: 100%;

    font-size: 3rem;

    display: flex;
    justify-content: center;
    
    background-color: ${byzantium_light};
    color: whitesmoke;

    padding: 1rem;

`;

export const LinksContainer = styled.div`

    background: ${oxfordBlue};

    width: 100%;

    border: none;

    display: flex;
    flex-direction: column;
`;

export const Links = styled.ul`
    
    width: 100%;

    display: flex;
    flex-direction: row;
    
    list-style-type: none;
`;

export const Li = styled.li`
  
    flex: 1;

    display: flex;

    align-items: center;
    justify-content: center;

    background-color: ${linksColor};

    cursor: pointer;

    color: black;

    padding: 3rem;

    gap: 2rem;

    transition: transform 250ms;

    &:hover {
        background-color: ${oxfordBlue};
        transform: translateY(-10px);
        color: whitesmoke;
    }

    svg{
        font-size: 7rem;
    }
`;