import styled from "styled-components";
import { darkThemeColor } from "../../utils";

export const Container = styled.div`
    width: 20%;
    height: 100% !important;
    border-radius: 2rem;
    background-color: ${darkThemeColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`;

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    gap: 1rem;
`;

export const Avatar = styled.img`
    background-color: white;
    height: 15rem;
    width: 15rem;
    border-radius: 6rem;
    margin-top: 10%;

`;

export const Name = styled.h1`
    color: whitesmoke;
    font-size: 3rem;
`;

export const LinksContainer = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const Links = styled.ul`
    
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    list-style-type: none;

    padding-top: 1rem;
`;
export const Link = styled.li`

    display: flex;
    gap: 2rem;

    align-items: center;

    background-color: ${darkThemeColor};

    cursor: pointer;

    color: whitesmoke;

    padding: 2rem;

    color: whitesmoke;
    
    font-size: 1.5rem;

    &:last-child{
        border-radius: 1rem;
    }

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

export const Contact = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    background-color: rgba(154, 0, 228, 0.6);

    padding: 1rem;
`;

export const LinkContact = styled.div`

    padding: 1rem;
    &:hover{
        background-color: ${darkThemeColor};
        color: whitesmoke;
        border-radius: 1rem;
    }

`;