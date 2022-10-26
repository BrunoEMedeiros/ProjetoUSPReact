import { useState, createContext } from "react";

/*
    types: 
    1 - alert
    2 - create
    3 - edit
    4 - delete
*/

export const ModalContext = createContext({
    type: 1,
    title: 'Alert',
    msg: 'Iam the modal',
    button: 'Confirm' 
})

export const ModalProvider = ({children}) =>{

    const[isOpen, setIsOpen] = useState(false);

    const[modalType, setModalType] = useState('alert');
    const[modalTitle, setModalTitle] = useState('Warning');
    const[modalFields, setModalFields] = useState([]);
    const[modalMsg, setModalMsg] = useState('default msg');
    const[id, setId] = useState(0);

    return(
        <ModalContext.Provider value={{ 
            isOpen, setIsOpen, 
            modalType, setModalType, 
            modalTitle, setModalTitle, 
            modalFields, setModalFields,
            modalMsg, setModalMsg,
            id, setId
        }}>
            {children}
        </ModalContext.Provider>
    )

}