import styled from "styled-components";
import { backgroundColor, darkThemeColor } from "../../utils/colors";
import { sizes } from "../../utils/sizes";

export const Container = styled.div`

    /*display: flex;
    justify-content: space-between;
    align-items: center;

    background: #735bf2;

    padding: 6rem;

    border-radius: 3rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.5);
    
    margin-top: 1rem;
    margin-bottom: 1rem;*/

    border-radius: 10%;
    padding: 3rem;
    
    background: rgba(255, 255, 255, 0.2);
    
    border-radius: 16px;
    
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    
    border: 1px solid rgba(255, 255, 255, 0.3);
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    /*
    @media screen and (max-width:${sizes.laptop}){
        padding: 3rem;
    }

    @media screen and (max-width:${sizes.mobile}){
        padding: 1rem;
    }
    */
`;

export const Imagem = styled.div`

    width: 70%;
    height: 25rem;
    margin-bottom: 8rem;

    svg{
        color: whitesmoke;
        height: 25rem;
        width: 100%;
        filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.8));
    }

`;

export const Name = styled.h3`
    color: whitesmoke;
    font-size: 5rem;

    &:hover{
        color: ${backgroundColor};
        cursor: pointer;
    }
    //text-shadow: 4px 4px 0px black;

   /* @media screen and (max-width:${sizes.laptop}){
        font-size: 3rem;
    }

    @media screen and (max-width:${sizes.mobile}){
        font-size: 2rem;
    }*/
`;

export const Buttons = styled.ul`

    display: flex;
    gap: 1rem;

    list-style: none;
`;

export const OptionButton = styled.li`

    color: whitesmoke;

    cursor: pointer;

    svg{
        color: whitesmoke;
        height: 6rem;
        width: 100%;
        filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.8));
    }

    svg:hover{
        color: ${backgroundColor};
    }


`;
