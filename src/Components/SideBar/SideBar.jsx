import React from 'react';
import { RiHomeLine} from 'react-icons/ri';
import { AiOutlinePieChart} from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi'
import { FiUser } from 'react-icons/fi'
import AvatarImage from '../../assets/aristotle.svg'
import { Container, ProfileContainer, ProfileInfo, Avatar, Name, Level, LinksContainer, Links, Li} from './style'

export function SideBar(){
    return (
        <Container>
            <ProfileContainer>
                <Avatar src={ AvatarImage}/>
                <ProfileInfo>
                    <Name>Bruno M</Name>
                </ProfileInfo>
            </ProfileContainer>
            <LinksContainer>
                <Links>
                    <Li>
                        <RiHomeLine />
                    </Li>
                    <Li>
                        <FiUser />
                    </Li>
                    <Li>
                        <AiOutlinePieChart />
                    </Li>
                    <Li>
                        <FiSettings />
                    </Li>
                </Links>
            </LinksContainer>
        </Container>
    )
}