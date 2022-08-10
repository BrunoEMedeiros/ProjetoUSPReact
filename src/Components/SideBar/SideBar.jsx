import React from 'react';
import { RiHomeLine, RiProfileLine, RiInstagramFill } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import { MdContactSupport, MdOutlineFacebook } from 'react-icons/md';
import { AiOutlinePieChart, AiFillTwitterCircle } from 'react-icons/ai';
import { GiStarMedal } from 'react-icons/gi';
import AvatarImage from '../../assets/aristotle.svg'
import { Badge } from '../Badge';
import { Container, ProfileContainer, Avatar, Name, LinksContainer, Links, Link, Contact, LinkContact} from './style'


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