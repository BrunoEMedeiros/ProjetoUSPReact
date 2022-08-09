import styled from "styled-components"
import { MdEdit } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import { darkThemeColor } from "../utils"
import { useState } from "react"

export function CrudCard({ sala_id, name, onEdit }){

    return (
        <Container>
            <Name>
                { name }
            </Name>
            <Buttons>
                <OptionButton>
                    <MdEdit size={25} onClick={ () => {
                        onEdit(sala_id, name, false);
                    }}/>
                </OptionButton>
                <OptionButton>
                    <AiFillDelete size={25} onClick={ () => {
                        onEdit(sala_id, name, true);
                    }} />
                </OptionButton>
            </Buttons>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #735bf2;

    padding: 1rem;

    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.5);
    
    margin-top: 1rem;
    margin-bottom: 1rem;
`;


const Name = styled.h3`
    color: whitesmoke;
    font-size: 2rem;
`;

const Buttons = styled.ul`

    display: flex;
    gap: 1rem;

    list-style: none;
`;

const OptionButton = styled.li`

    color: whitesmoke;

    cursor: pointer;

    &:hover{
        color: ${darkThemeColor};
    }
`;

