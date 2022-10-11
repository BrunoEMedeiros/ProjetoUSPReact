import styled from "styled-components";
import { defaultThemeColor } from "../../utils/colors";
import { desktop_min_width } from "../../utils/responsivity";

export const Container = styled.div`
    width: min( ${ desktop_min_width }, 100%);    
    display: flex;
    justify-content: center;

    border-radius: 1rem;
    border: 0.5rem solid #333;
    border-left: none;
    border-top: none;

    background: linear-gradient(to bottom right, #FFFAFA 25%, ${defaultThemeColor} 150%);
`;