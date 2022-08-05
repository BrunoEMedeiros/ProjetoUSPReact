import styled from "styled-components"
import { IoIosAddCircleOutline } from 'react-icons/io'
import { darkThemeColor } from "../utils";
import { useState } from "react";
import { CrudCard } from "./CrudCard";

export function Crud(){

    const[sala, setSala] = useState([]);
    const[salaName, setSalaName] = useState('Digite o nome da sala');

    function handlerSala(){
        const newSala = {
            sala_id : 1,
            nome : salaName,
            status_sala : 1
         }
 
        setSala([...sala, newSala]);
    }

    return(
        <Container>
            <Header>
                <Name>Salas</Name>
                <AddRoom>
                    <input 
                        type="text" 
                        placeholder='Digite o nome...'
                        onChange={e => setSalaName(e.target.value)} 
                    />
                    <Button onClick={() => { handlerSala() }}>
                        <IoIosAddCircleOutline size={40} />
                    </Button>
                </AddRoom>
            </Header>
            {
                sala.map(data =>{
                    return <CrudCard 
                        sala_id = { data.sala_id }
                        name = { data.nome }
                        status_sala = { data.status_sala }
                    />
                })
            }
        </Container>
    )
}

const Container = styled.div`
    margin-top: 3rem;
    width: 60%;
`;
const Header = styled.div`
    padding: 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: rgba(154, 0, 228, 0.6);

    border-radius: 1rem;

    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.5);

    margin-bottom: 2rem;

`;
const Name = styled.h1`
    font-size: 3rem;
`;
const AddRoom = styled.div`

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

const Button = styled.button`

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