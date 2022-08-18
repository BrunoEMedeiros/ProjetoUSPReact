import { IoIosAddCircleOutline } from 'react-icons/io'
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { usePost } from "../../hooks/usePost";
import { CrudCard } from '../CrudCard/CrudCard';
import Modal from 'react-modal'
import { usePut } from "../../hooks/usePut";
import { useDelete } from "../../hooks/useDelete";
import { Container, Header, Name, 
        AddRoom, Button, Content, 
        ModalContainer, ModalTitle, 
        ModalForm, ModalInput, 
        ModalButtomSave, ModalButtonDelete 
    } from './style'

Modal.setAppElement('#root')

export function Crud({ title }){

    const { data, carregando, setDataCallBack } = useFetch('/sala/');
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

    async function handlerSala(){
        usePost('/sala/novo', {
            nome : salaName
        })
        setDataCallBack(true);
    }

    async function editSala(){
        usePut(`/sala/alterar/${editCod}`,{
            nome : editSalaNome
        })
        closeModalEdit()
        setDataCallBack(true);
       
    }

    async function deleteSala(){
        useDelete(`/sala/excluir/${editCod}`)
        closeModalEdit()
        setDataCallBack(true);
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