import styled from 'styled-components'

export const Overlay = styled.div`

    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(22, 21, 21, 0.5);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    //box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`

    width: 200px;
    background-color: whitesmoke;
    border-radius: 10px;

    padding: 10px;
    
    border: 1px solid black;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

`;

export const Header = styled.header`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;

    margin-bottom: 30px;

`;

export const Alert = styled.div`
    
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 12px;

    svg{
        height: 30px;
        width: 30px;
        color: #F2AD00;
    }

`

export const BotaoFechar = styled.button`

    height: 22px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;

    border-radius: 30%;

    cursor: pointer;

    svg{
        height: 100%;
        width: 100%;
    }

    &:hover{
        background-color: whitesmoke;

        svg{
            color: crimson;
        }
    }

`;

export const Content = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    margin-bottom: 20px;

`;

export const Campo = styled.input`
    width: 90%;
    
    padding: 10px;
    border-radius: 10px;
    border: 1px solid black;
    //box-shadow: 0 0.5px 10px 0 rgba(0, 0, 0, 0.5);
    font-size: 10px;
`;

export const Buttons = styled.div`



`;