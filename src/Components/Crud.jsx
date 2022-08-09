import styled from "styled-components"
import { IoIosAddCircleOutline } from 'react-icons/io'
import { darkThemeColor } from "../utils";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { usePost } from "../hooks/usePost";
import { CrudCard } from "./CrudCard";
import Modal from 'react-modal'
import axios from 'axios';

Modal.setAppElement('#root')

export function Crud({ title }){


    const { data, carregando, setA } = useFetch('/sala/');
    const[salaName, setSalaName] = useState();
    const[editCod, setEditCod] = useState();
    const[modalIsOpen, setModalIsOpen] = useState(false);
    const[editSalaNome, setEditSalaNome] = useState();
    const[modalType, setModalType] = useState(false);

    function onEditModal(id, nome, type){
        setModalType(type);
        setEditSalaNome(nome);
        setEditCod(id);
        openModalEdit();
    }

    function openModalEdit(){
        setModalIsOpen(true)
    }

    function closeModalEdit(){
        setModalIsOpen(false)
    }

    /*useEffect(() => {
        async function fetchSala(){
            axios.get('http://localhost:4000/sala/')
            .then((response) => {
                setSala(response.data);
            })
        }

        fetchSala();
        
    }, [salaCallBack]);
    */

    async function handlerSala(){
        usePost('/sala/novo', {
            nome : salaName
        });
        
        setA(true);
    }

    async function editSala(){
        axios.put(`http://localhost:4000/sala/alterar/${editCod}`,{
            nome : editSalaNome
        }).then((response) => {
            if(response.status == 206)
            {
                closeModalEdit();
                window.alert(
                    "Faltou alguma coisa!"
                )
                if (confirmBox === true) {
                  window.close  
                }
            }
            else if(response.status == 203)
            {
                closeModalEdit();
                window.alert(
                    "Esta sala ja foi cadastrada"
                )
                if (confirmBox === true) {
                  window.close  
                }
            }
            else if(response.status == 200)
            {
                closeModalEdit();
                setSalaCallBack(true);
            }
            else if(response.status == 500)
            {
                closeModalEdit();
                window.alert(
                    "Ops...ocorreu um erro ao alterar a sala"
                )
                if (confirmBox === true) {
                  window.close  
                }
            }
        })
    }

    async function deleteSala(){
        axios.delete(`http://localhost:4000/sala/excluir/${editCod}`)
        .then((response) => {
            if(response.status == 203)
            {
                closeModalEdit();
                window.alert(
                    "Sala nao encontrada para excluir!"
                )
                if (confirmBox === true) {
                  window.close  
                }
            }
            else if(response.status == 200)
            {
                closeModalEdit();
                setSalaCallBack(true);
            }
            else if(response.status == 500)
            {
                closeModalEdit();
                window.alert(
                    "Ops...ocorreu um erro ao excluir a sala"
                )
                if (confirmBox === true) {
                  window.close  
                }
            }
        })
    }

    const customStyles = {
        content: {
            top: '35%',
            right: '35%',
            bottom: 'auto',
            left: '35%',
            padding: '5rem',
            borderRadius: '1rem'
        },
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
                    <Button onClick={handlerSala}>
                        <IoIosAddCircleOutline size={40} />
                    </Button>
                </AddRoom>
            </Header>
            {
                carregando ? 
                <h1>Carregando...</h1>
                :
                <Content>
                {
                    data.map(salas => {
                        return <CrudCard 
                                key={salas.sala_id}
                                onEdit = {onEditModal}
                                sala_id = { salas.sala_id }
                                name = { salas.nome }
                        />
                    })
                }
            </Content>
            }
            <Modal 
                isOpen={modalIsOpen} 
                onRequestClose={closeModalEdit}
                contentLabel="Editar Sala"
                style={customStyles}
            >
            <ModalContainer>
                <ModalTitle>
                    {
                        modalType ? 'Excluir sala' : 'Editar sala'
                    }
                </ModalTitle>
                <ModalForm>
                    {
                        modalType ? 
                        <ModalInput type="text" 
                            disabled={true} 
                            placeholder={editSalaNome}
                        /> : 
                        <ModalInput type="text" 
                        placeholder={editSalaNome}
                        onChange={e => setEditSalaNome(e.target.value)}
                    />
                    }
                    {
                        modalType ? 
                        <ModalButtonDelete onClick={deleteSala}> 
                            Excluir 
                        </ModalButtonDelete>
                        : 
                        <ModalButtomSave onClick={editSala}>
                            Salvar
                        </ModalButtomSave>
                    }
                </ModalForm>
            </ModalContainer>
            </Modal>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 3rem;
    width: 60%;
    height: 70%;
    
`;
const Header = styled.div`
    padding: 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #9D4EDD;

    border-radius: 1rem;

    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.5);

    margin-bottom: 2rem;

`;
const Name = styled.h1`
    font-size: 3rem;
    color: whitesmoke;
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

const Content = styled.div`
    height: 100%;
    overflow: auto;
    -webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
`;

const ModalContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
   
`;

const ModalTitle = styled.h1`
    font-size: 3rem;
`;

const ModalForm = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const ModalInput = styled.input`
    width: 100%;
    
    padding: 2rem;

    background: #E6E6E6;
    border-radius: 1rem;
    border: none;

    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.5);

    font-size: 2rem;
`;

const ModalButtomSave = styled.button`
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

const ModalButtonDelete = styled.button`
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
