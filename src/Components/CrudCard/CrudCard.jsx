
import { MdEdit } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import { MdOutlineClass } from 'react-icons/md'
import { Container, Imagem, Name, Buttons, OptionButton} from './style'


export function CrudCard({ id, text, onEdit, onDelete }){

    return (
        <Container>
            <Imagem>
                <MdOutlineClass />
            </Imagem>
            <Name>
                { text }
            </Name>
            <Buttons>
                <OptionButton>
                    <MdEdit onClick={ () => {
                        console.log('Botao edit')
                    }}/>
                </OptionButton>
                <OptionButton>
                    <AiFillDelete onClick={ () => {
                        console.log('Botao delete')
                    }} />
                </OptionButton>
            </Buttons>
        </Container>
    )
}

