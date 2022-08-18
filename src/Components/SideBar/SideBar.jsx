import React from 'react';
import { RiHomeLine, RiProfileLine} from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlinePieChart} from 'react-icons/ai';
import AvatarImage from '../../assets/aristotle.svg'
import { Container, ProfileContainer, ProfileInfo, Avatar, Name, Level, LinksContainer, Links, Link} from './style'

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
                </Links>
            </LinksContainer>
        </Container>
    )
}