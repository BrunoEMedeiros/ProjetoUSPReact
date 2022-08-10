import styled from "styled-components";
import { darkThemeColor } from "../../utils";

export const Container = styled.div`
    margin-top: 3rem;
    width: 60%;
    height: 70%;
    
`;

export const Header = styled.div`
    padding: 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #9D4EDD;

    border-radius: 1rem;

    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.5);

    margin-bottom: 2rem;

`;

export const Name = styled.h1`
    font-size: 3rem;
    color: whitesmoke;
`;

export const AddRoom = styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 3rem;

    input{
        width: 70%;
        padding: 2rem;

        background: #E6E6E6;
        border-radius: 1rem;
        border: none;

        font-size: 2rem;
    }
`;

export const Button = styled.button`

    padding: 1rem;

    color: whitesmoke;

    cursor: pointer;

    border: none;

    background-color: ${darkThemeColor};
    
    border-radius: 1rem;

    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.5);
    
    &:hover{
        background-color: whitesmoke;
        color: ${darkThemeColor};
    }

`;

export const Content = styled.div`
    height: 100%;
    overflow: auto;
    -webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
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
