import React from 'react'
import styled from "styled-components"
import { darkThemeColor } from "../utils";
import AvatarImage from '../assets/aristotle.svg'
import { Badge } from './Badge';


export function SideBar(){
    return (
        <Container>
            <ProfileContainer>
                <Avatar src={ AvatarImage}/>
                <Name>Bruno M</Name>
                <Badge content='Adm'/>
            </ProfileContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 20%;
    height: 100% !important;
    border-radius: 2rem;
    background-color: #091322;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
`;

const ProfileContainer = styled.div``;

const Avatar = styled.img`
    height: 7rem;
    border-radius: 6rem;
    margin-top: 20%;

`;

const Name = styled.h1``;