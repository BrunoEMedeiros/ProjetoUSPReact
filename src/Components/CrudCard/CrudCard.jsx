
import { MdEdit } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import { Container, Name, Buttons, OptionButton} from './style'


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

