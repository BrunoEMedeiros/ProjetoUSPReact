import React from 'react';
import { RiHomeLine} from 'react-icons/ri';
import { AiOutlinePieChart} from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi'
import { FiUser } from 'react-icons/fi'
import { HiAcademicCap } from   'react-icons/hi'
import { Container, ProfileContainer, Name, LinksContainer, Links, Li} from './style'

export function SideBar(){
    return (
        <Container>
            <ProfileContainer>
                <HiAcademicCap color='white'/>
                <Name>Bruno M</Name>
            </ProfileContainer>
            <LinksContainer>
                <Links>
                    <Li>
                        <RiHomeLine className="icons" />
                        SALAS
                    </Li>
                    <Li>
                        <FiUser className="icons" />
                        ALUNOS
                    </Li>
                    <Li>
                        <AiOutlinePieChart className="icons" />
                        QUESTÕES
                    </Li>
                    <Li>
                        <FiSettings className="icons" />
                    </Li>
                </Links>
            </LinksContainer>
        </Container>
    )
}