import styled from "styled-components";
import { darkThemeColor } from "../../utils/colors";
import { sizes } from "../../utils/sizes";

export const Container = styled.div`
    width: 90%;
`;

export const Header = styled.div`
    padding: 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #FB8500;

    border-radius: 2rem;

    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.8);

    margin-bottom: 2rem;

    @media screen and (max-width: ${sizes.mobile}) {
        
        border-radius: 3rem;
        justify-content: space-around;

    }

`;

export const Name = styled.h1`
    font-size: 7rem;
    color: whitesmoke;
    text-shadow: 3.5px 3.5px 0px black;

    @media screen and (max-width: ${sizes.tablet}) {
        
        font-size: 5rem;
        
    }
`;

export const AddRoom = styled.div`

    width: 60%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 3rem;

    input{
        width: 100%;
        padding: 5rem;

        background: #E6E6E6;
        border-radius: 5rem;
        border: none;

        font-size: 4rem;

        box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.5);

        @media screen and (max-width: ${sizes.tablet}) {
        
            border-radius: 3.5rem;
            padding: 3rem;

        }
    }
`;

export const Button = styled.button`

    padding: 2rem;

    color: black;

    cursor: pointer;

    border: none;

    background-color: #FFB703;
    
    border-radius: 4rem;

    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.5);
    
    &:hover{
        background-color: whitesmoke;
        color: black;
    }

    svg{
        height: 10rem;
        width: 10rem;

        @media screen and (max-width: ${sizes.tablet}) {
        
            border-radius: 2rem;
            height: 6rem;
            width: 6rem;

        }
    }

`;

export const Content = styled.div`

    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, 380px);
    justify-content: center;
    //align-items: center;

    
    @media screen and (max-width: ${sizes.desktop}) {

        grid-gap: 35px;
        grid-template-columns: repeat(auto-fit, 430px);
        
    }

    @media screen and (max-width: ${sizes.laptop}) {

        grid-gap: 30px;
        grid-template-columns: repeat(auto-fit, 350px);

    }

    @media screen and (max-width: ${sizes.tablet}) {
    
        grid-template-columns: repeat(auto-fit, 300px);

    }

    @media screen and (max-width: ${sizes.mobile}) {
    
        grid-template-columns: repeat(auto-fit, 400px);

    }
    
`;

export const ModalContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
   
`;

export const ModalTitle = styled.h1`
    font-size: 3rem;
`;

export const ModalForm = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const ModalInput = styled.input`
    width: 100%;
    
    padding: 2rem;

    background: #E6E6E6;
    border-radius: 1rem;
    border: none;

    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.5);

    font-size: 2rem;
`;

export const ModalButtomSave = styled.button`
    width: 100%;

    padding: 1rem;

    border: none;

    border-radius: 1rem;

    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.5);

    font-size: 2rem;
    font-weight: 900;

    background-color: blueviolet;

    color: gray;

    &:hover{
        color : whitesmoke;
        cursor: pointer;
        background-color: #00D100;
    }
`;

export const ModalButtonDelete = styled.button`
    width: 100%;

    padding: 1rem;

    border: none;

    border-radius: 1rem;

    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.5);

    font-size: 2rem;
    font-weight: 900;

    background-color: blueviolet;

    color: gray;

    &:hover{
        color : whitesmoke;
        cursor: pointer;
        background-color: red;
    }    
`;
