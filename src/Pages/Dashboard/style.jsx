import styled from "styled-components";
import { desktop_min_width, tablet_min_width } from "../../utils/responsivity";

export const Container = styled.div`
    height: 100%;
    width: min(${ desktop_min_width }, 100%);

    @media (max-width: ${ tablet_min_width }) {
       border-left: 1px solid white;
       border-right: 1px solid white;
    }

    display: flex;
    justify-content: center;
    align-items: center;

`;