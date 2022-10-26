import { createContext, useState } from "react";

export const CrudContext = createContext({
    salas: [],
    questoes: [],
    alunos: [],
    respostas: []
})

export const CrudProvider = ({children}) =>{

    const[crudType, setCrudType] = useState(1);
    const[crudTitle, setCrudTitle] = useState('Salas');
    const[crudField, setCrudField] = useState();

    /*
    const[editCod, setEditCod] = useState();

    const[salaName, setSalaName] = useState();
    const[editSalaNome, setEditSalaNome] = useState();
    
    const[questName, setQuestName] = useState();
    const[editQuest, setEditQuest] = useState();

    const[studantName, setStudantName] = useState();

    const[answer, setAnswer] = useState();
    */

    return(
        <CrudContext.Provider value={{ 
            crudType, setCrudType,
            crudTitle, setCrudTitle,
            crudField, setCrudField 
        }}>
            {children}
        </CrudContext.Provider>
    )
}