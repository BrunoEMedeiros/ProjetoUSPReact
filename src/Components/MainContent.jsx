import styled from "styled-components"
import { Crud } from "./Crud";

export function MainContent(){
    return(
        <Container>
            <Crud />
        </Container>
    )
}

const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;

   
    border-radius: 1rem;
    border: 0.5rem solid #333;
    border-left: none;
    border-top: none;
`;
