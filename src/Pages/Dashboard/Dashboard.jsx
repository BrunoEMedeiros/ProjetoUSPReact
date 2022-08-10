
import { MainContent } from "../../Components/MainContent/MainContent";
import { SideBar } from "../../Components/SideBar/SideBar";

import { Container } from "./style";

export function Dashboard(){
    return(
        <Container>
            <SideBar />
            <MainContent />
        </Container>
    )
}