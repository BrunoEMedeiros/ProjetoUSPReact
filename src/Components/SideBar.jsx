import React from 'react'
import styled from "styled-components"
import { darkThemeColor } from "../utils";
import { RiHomeLine, RiProfileLine, RiInstagramFill } from 'react-icons/ri'
import { FaUserAlt } from 'react-icons/fa'
import { MdContactSupport, MdOutlineFacebook } from 'react-icons/md'
import { AiOutlinePieChart, AiFillTwitterCircle } from 'react-icons/ai'
import { GiStarMedal } from 'react-icons/gi'
import AvatarImage from '../assets/aristotle.svg'
import { Badge } from './Badge';


export function SideBar(){
    return (
        <Container>
            <ProfileContainer>
                <Avatar src={ AvatarImage}/>
                <Name>Bruno M</Name>
                <Badge content={ <GiStarMedal  size={40} color='yellow'/> }/>
            </ProfileContainer>
            <LinksContainer>
                <Links>
                    <Link>
                        <RiHomeLine />
                        Salas
                    </Link>
                    <Link>
                        <FaUserAlt />
                        Alunos
                    </Link>
                    <Link>
                        <AiOutlinePieChart />
                        Relatórios
                    </Link>
                    <Link>
                        <RiProfileLine />
                        Perfil
                    </Link>
                    <Link>
                        <MdContactSupport size={30}/>
                        <MdOutlineFacebook size={30}/>
                        <RiInstagramFill size={30}/>
                        <AiFillTwitterCircle size={30}/>
                    </Link>
                    </Links>
            </LinksContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 20%;
    height: 100% !important;
    border-radius: 2rem;
    background-color: ${darkThemeColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`;

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    gap: 1rem;
`;

const Avatar = styled.img`
    background-color: white;
    height: 15rem;
    width: 15rem;
    border-radius: 6rem;
    margin-top: 10%;

`;

const Name = styled.h1`
    color: whitesmoke;
    font-size: 3rem;
`;

const LinksContainer = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Links = styled.ul`
    
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    list-style-type: none;

    padding-top: 1rem;
`;
const Link = styled.li`

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

const Contact = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    background-color: rgba(154, 0, 228, 0.6);

    padding: 1rem;
`;

const LinkContact = styled.div`

    padding: 1rem;
    &:hover{
        background-color: ${darkThemeColor};
        color: whitesmoke;
        border-radius: 1rem;
    }

`;
