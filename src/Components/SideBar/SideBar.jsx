import React from 'react';
import { RiHomeLine} from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlinePieChart} from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi'
import AvatarImage from '../../assets/aristotle.svg'
import { Container, ProfileContainer, ProfileInfo, Avatar, Name, Level, LinksContainer, Links, Li} from './style'

//  <Badge content={ <GiStarMedal  size={40} color='yellow'/> }/>

export function SideBar(){
    return (
        <Container>
            <ProfileContainer>
                <Avatar src={ AvatarImage}/>
                <ProfileInfo>
                    <Name>Bruno M</Name>
                    <Level>Professor</Level>
                </ProfileInfo>
            </ProfileContainer>
            <LinksContainer>
                <Links>
                    <Li>
                        <RiHomeLine />
                        Salas
                    </Li>
                    <Li>
                        <FaUserAlt />
                        Alunos
                    </Li>
                    <Li>
                        <AiOutlinePieChart />
                        Relatórios
                    </Li>
                    <Li>
                        <FiSettings />
                        Perfil
                    </Li>
                </Links>
            </LinksContainer>
        </Container>
    )
}