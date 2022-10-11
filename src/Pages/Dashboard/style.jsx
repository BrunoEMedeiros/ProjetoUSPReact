import styled from "styled-components";
import { sizes } from "../../utils/sizes";

export const Container = styled.div`

    display: grid;
    grid-template-columns: 25% 50% 25%;
    grid-template-rows: 20% 70%;

    @media screen and (min-device-width:${sizes.laptop}), screen and (max-width:${sizes.desktop}) {
        //grid-template-areas: "s m";
    }

`;