import styled from "styled-components";
import { defaultThemeColor } from "../../utils/colors";

export const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;

    border-radius: 1rem;
    border: 0.5rem solid #333;
    border-left: none;
    border-top: none;

    background: linear-gradient(to bottom right, #FFFAFA 25%, ${defaultThemeColor} 150%);
`;