import styled from "styled-components";
import { byzantium_light, byzantium_medium, oxfordBlue } from "../../utils/colors";
import { byzantium } from "../../utils/colors";
import { Link } from "react-router-dom";

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

    padding: 1rem;

    border-radius: 2rem 2rem 0rem 0rem;
   
`;

export const Level = styled.h2`
    width: 100%;

    display: flex;
    justify-content: center;
    
    background-color: ${byzantium_light};
    color: whitesmoke;

    padding: 1rem;

`;

export const LinksContainer = styled.div`
    background: ${oxfordBlue};

    height: 100%;
    width: 100%;

    border: none;

    display: flex;
    flex-direction: column;

    border-radius: 2rem;

`;

export const Links = styled.ul`
    
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    
    list-style-type: none;
`;

export const Li = styled.li`

    flex: 1;

    display: flex;

    align-items: center;

    background-color: ${byzantium};

    cursor: pointer;

    color: whitesmoke;

    padding: 2rem;
    
    font-size: 1.5rem;

    gap: 2rem;

    transition: transform 250ms;

    &:last-child {
        border-radius: 0rem 0rem 2rem 2rem;
    }

    &:hover {
        background-color: ${oxfordBlue};
        transform: translateY(-10px);
    }

    svg{
        font-size: 2.5rem;
    }
`;

export const PageLink = styled(Link)`

    font-size: 3rem;

`;