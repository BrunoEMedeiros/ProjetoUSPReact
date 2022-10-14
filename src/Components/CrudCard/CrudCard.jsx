
import { MdEdit } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import { MdOutlineClass } from 'react-icons/md'
import { Container, Imagem, Name, Buttons, OptionButton} from './style'


export function CrudCard({ sala_id, name, onEdit }){

    return (
        <Container>
            <Imagem>
                <MdOutlineClass />
            </Imagem>
            <Name>
                { name }
            </Name>
            <Buttons>
                <OptionButton>
                    <MdEdit onClick={ () => {
                        onEdit(sala_id, name, false);
                    }}/>
                </OptionButton>
                <OptionButton>
                    <AiFillDelete onClick={ () => {
                        onEdit(sala_id, name, true);
                    }} />
                </OptionButton>
            </Buttons>
        </Container>
    )
}

