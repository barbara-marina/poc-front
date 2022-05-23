import styled from "styled-components";

export const Form = styled.form`
    width: 100vw;
    height: 100vh;
    background-color: #0099ff86;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const Input = styled.input`
    width: 350px;
    height: 50px;

    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 400;

    padding-left: 15px;

    border: none;
    border-radius: 15px;

    &::placeholder{
        color: #4169E1;

        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        font-weight: 400;
    }
`

export const Button = styled.button`
    width: 350px;
    height: 50px;

    background-color: #0000cd88;
    color: #ffffff;

    border: none;
    border-radius: 15px;

    font-size: 20px;
    font-weight: 700;

    cursor: pointer;
`;