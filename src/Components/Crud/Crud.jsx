import { IoIosAddCircleOutline } from 'react-icons/io'
import { useContext } from "react";
import { useFetch } from "../../hooks/useFetch";
import { CrudCard } from '../CrudCard/CrudCard';
import { Container, Header, Name, 
        AddRoom, Button, Content
    } from './style'    
import { CrudContext } from '../../contexts/context_crud';
import { ModalContext } from '../../contexts/context_modal';
import { handleSala } from './utils';

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

    function montaCard(){
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
        /*setModalTitle('Editar sala');
        setModalType('edit');
        setModalFields([
          {
            campo: 'Sala',
            valor: nome,
            func: setNome,
          }
        ]);
        setIsOpen(prevState => !prevState);*/
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
                    <Button onClick={()=>{
                    handleSala(crudField, setDataCallBack)
                    }}>
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
                    montaCard()
                }
                </Content>
            }
        
        </Container>
    )
}