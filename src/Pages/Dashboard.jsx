
import styled from "styled-components"
import { MainContent } from "../Components/MainContent";
import { SideBar } from "../Components/Sidebar";

export function Dashboard(){
    return(
        <Container>
            <SideBar />
            <MainContent />
        </Container>
    )
}

const Container = styled.div`

    height: 97vh;

    display:flex;

    background: linear-gradient(to bottom right, #FFFAFA 10%, #e6e4ff 70%);

    border-radius: 2em;

`;