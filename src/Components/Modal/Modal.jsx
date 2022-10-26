
import { useContext } from "react";
import { ModalContext } from "./context";
import { Container, Header, Content, Overlay, Campo, BotaoFechar, Buttons, Alert } from "./style"
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbAlertTriangle } from 'react-icons/tb'

export function Modal({ save, edit, delet }){

    const { 
        isOpen, setIsOpen,
        modalType,
        modalTitle,
        modalFields,
        modalMsg
    } = useContext(ModalContext);

    if(!isOpen) return null

    if(isOpen){
        switch(modalType){
            case 'alert':
                return(
                <Overlay id="fundo">
                    <Container>
                        <Header>
                            <Alert>
                                <TbAlertTriangle />
                                <strong>{modalTitle}</strong>
                            </Alert>
                            <BotaoFechar onClick={()=> setIsOpen(prevState => !prevState)}>
                                <AiFillCloseCircle />
                            </BotaoFechar>
                        </Header>
                        <Content>
                        <small>
                                {modalMsg}
                        </small>
                        </Content>
                    </Container>
                </Overlay>
                )
            case 'add':
                return(
                    <Overlay>
                    <Container>
                        <Header>
                            <Alert>
                                <strong>{modalTitle}</strong>
                            </Alert>
                            <BotaoFechar onClick={()=> setIsOpen(prevState => !prevState)}>
                                <AiFillCloseCircle />
                            </BotaoFechar>
                        </Header>
                        <Content>
                            {
                                modalFields.map((data)=>(
                                    <Campo 
                                    key={data.campo}
                                    type="text" 
                                    placeholder={data.campo} 
                                    onChange={e => data.func(e.target.value)} />
                                ))
                            }
                        </Content>
                        <Buttons>
                            <button onClick={()=> {save()}}>
                                Salvar
                            </button>
                        </Buttons>
                    </Container>
                </Overlay>
                )
            case 'edit':
                return(
                    <Overlay>
                    <Container>
                        <Header>
                            <Alert>
                                <strong>{modalTitle}</strong>
                            </Alert>
                            <BotaoFechar onClick={()=> setIsOpen(prevState => !prevState)}>
                                <AiFillCloseCircle />
                            </BotaoFechar>
                        </Header>
                        <Content>
                            {
                                modalFields.map((data)=>(
                                    <Campo 
                                    key={data.campo}
                                    type="text" 
                                    placeholder={data.valor} 
                                    onChange={e => data.func(e.target.value)} />
                                ))
                            }
                        </Content>
                        <Buttons>
                            <button onClick={()=> {edit()}}>
                                Salvar
                            </button>
                        </Buttons>
                    </Container>
                </Overlay>
                )
            case 'delete':
                return(
                <Overlay id="fundo">
                    <Container>
                        <Header>
                            <Alert>
                                <strong>{modalTitle}</strong>
                            </Alert>
                            <BotaoFechar onClick={()=> setIsOpen(prevState => !prevState)}>
                                <AiFillCloseCircle />
                            </BotaoFechar>
                        </Header>
                        <Content>
                        <small>
                                {modalMsg}
                        </small>
                        </Content>
                        <Buttons>
                            <button onClick={()=> {delet()}}>
                                Excluir
                            </button>
                        </Buttons>
                    </Container>
                </Overlay>
                )
        }
}}