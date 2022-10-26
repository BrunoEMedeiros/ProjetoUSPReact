import { IoIosAddCircleOutline } from 'react-icons/io'
import { useEffect, useState, useContext } from "react";
import { useFetch } from "../../hooks/useFetch";
import { usePost } from "../../hooks/usePost";
import { CrudCard } from '../CrudCard/CrudCard';
import { usePut } from "../../hooks/usePut";
import { useDelete } from "../../hooks/useDelete";
import { Container, Header, Name, 
        AddRoom, Button, Content, 
        ModalContainer, ModalTitle, 
        ModalForm, ModalInput, 
        ModalButtomSave, ModalButtonDelete 
    } from './style'
import { CrudContext } from '../../contexts/context_crud';
import { ModalContext } from '../../contexts/context_modal';
import {  } from 'react';

export function Crud(){

    const{ 
        isOpen, setIsOpen, 
        setModalType, setModalTitle, 
        setModalFields, setModalSave 
    } = useContext(ModalContext);

    const{
        crudType, setCrudType, 
        crudTitle, setCrudTitle,
        crudField, setCrudField
    } = useContext(CrudContext);

    const{ data, carregando, setDataCallBack, setUrl } = useFetch();

    useEffect(()=>{
        switch (crudType) {
            case 1:
                console.log('Passei no effect 1');
                setUrl('/sala/');           
        }
        
    },[crudType])

    function carregarcards(){
        switch (crudType) {
            case 1:
                return data.map((card)=>(
                    <CrudCard 
                        key={card.sala_id}
                        onEdit = {openEdit}
                        id = { card.sala_id }
                        text = { card.nome }
                    />
                ))
        }
    }

    function openEdit(){
        setModalTitle('Editar sala');
        setModalType('edit');
        setModalFields([
          {
            campo: 'Nome',
            valor: nome,
            func: setNome,
          },
          {
            campo: 'Idade',
            valor: idade,
            func: setIdade
          },
          {
            campo: 'CPF',
            valor: cpf,
            func: setCpf
          }
        ]);
        setIsOpen(prevState => !prevState);
      } 
   
    return(
        <Container>
            <Header>
                <Name>{crudTitle}</Name>
                <AddRoom>
                    <input 
                        type="text" 
                        placeholder='Digite o nome...'
                        onChange={e => setCrudField(e.target.value)}
                    />
                    <Button >
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
                   carregarcards()
                }
            </Content>
            }
        </Container>
    )
}