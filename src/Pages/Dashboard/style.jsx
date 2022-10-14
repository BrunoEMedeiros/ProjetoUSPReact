import styled from "styled-components";
import { sizes } from "../../utils/sizes";
import { pageBackground } from "../../utils/colors";

export const Container = styled.div`

        display: grid;
        grid-template-columns: minmax(24rem, 10%)  minmax(96rem, 90%);
        grid-template-rows: 100%;

    @media screen and (min-device-width:${sizes.laptop}), screen and (max-width:${sizes.desktop}) {

        grid-template-areas: "s m"
                            "s m";

        background-color: ${pageBackground};

    }

    @media screen and (max-width: ${sizes.tablet}) {

        grid-template-columns: 100%;
        grid-template-rows: minmax(20rem, 30%) 100%;
        grid-template-areas: "s s"
                            "m m";
                            
    }

`;