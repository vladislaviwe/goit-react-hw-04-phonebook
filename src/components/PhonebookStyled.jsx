import styled from "styled-components";

export const Box = styled.div`
    width: 350px;
    padding: 20px;
    margin: 40px auto;

    text-align: center;

    background-color: #b9a2b9;

    border: 5px solid black;
    border-radius: 20px;
`

export const FormBtn = styled.button`
    cursor: pointer;
    display: block;

    width: 100px;
    padding: 10px;
    margin: 16px auto 0;

    background-color: #c9faea;

    border: 2px solid black;
    border-radius: 10px;

    &:hover {
        background-color: #a0f8db;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
    }

    &:focus {
        background-color: aquamarine;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
    }
`
export const LabelText = styled.p`
    margin: 0;
`

export const Input = styled.input`
    border-radius: 5px;

    &:hover {
        background-color: #c9faea;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
    }

    &:focus {
        background-color: aquamarine;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
    }
`

export const List = styled.ol`
    padding: 0;
`

export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;

    &:not(:last-child) {
        margin-bottom: 5px;
    }
`

export const DeleteBtn = styled.button`
    cursor: pointer;
    background-color: #c9faea;

    border-radius: 20px;

    &:hover {
        background-color: #a0f8db;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
    }

    &:focus {
        background-color: aquamarine;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
    }
`

export const MainTitle = styled.h1`
    margin: 0;
    margin-bottom: 16px;
`

export const SecondTitle = styled.h2`
    margin-top: 30px;
    margin-bottom: 16px;
`