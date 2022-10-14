import styled from "styled-components";
import { byzantium_light, defaultThemeColor, oxfordBlue, linksColor } from "../../utils/colors";
import { backgroundColor } from "../../utils/colors";
import { sizes } from "../../utils/sizes";

export const Container = styled.div`
       grid-area: s;

       display: flex;
       flex-direction: column;
       font-family: 'Silkscreen', cursive;  
       
`;

export const ProfileContainer = styled.div`

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    background-color: ${backgroundColor};

    svg{
        height: 10rem;
        width: 10rem;
    }
    
`;

export const Name = styled.div`
    
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    color: whitesmoke;
    font-size: 3rem;

    padding: 1rem;

    border-radius: 2rem 2rem 0rem 0rem;
   
`;

export const LinksContainer = styled.div`

    width: 100%;
    height: 100%;

    border: none;

    display: flex;
    flex-direction: column;
    background-color: #034464;
     
`;

export const Links = styled.ul`
    
    width: 100%;

    display: flex;
    flex-direction: column;
    
    list-style-type: none;

    @media screen and (max-width: ${sizes.tablet}) {
        
        height: 100%;
        display: flex;
        flex-direction: row;
        
    }
`;

export const Li = styled.li`
  
    flex: 1;

    display: flex;

    align-items: center;
    //justify-content: space-between;

    cursor: pointer;
    font-size: 2.3rem;

    color: whitesmoke;

    padding: 3rem;

    gap: 2rem;

    &:hover {
        background-color: #035883;
    }

    svg{
        font-size: 5rem;
        color: whitesmoke;

    }

    &:last-child{
        justify-content: center;
    }

    @media screen and (max-width: ${sizes.tablet}) {
    
        display: flex;
        flex-direction: row;
        
    }

    @media screen and (max-width: ${sizes.mobile}) {
        font-size: 1.8rem;
    }

    
`;