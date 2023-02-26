import styled from "styled-components";

export const StyledFormContainer = styled.form`
    background-color: #ffffff;
    background-color: #FFFFFF;
    gap: 20px;
    margin: 2px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    @media (max-width: 767px) 
    {
        flex-wrap: wrap;
    }
`;

export const StyledFormAddButton = styled.button`
    background-color: teal;
    color: #FFFFFF;
    border: none;
    padding: 10px;
    flex-shrink: 0;
    flex-grow: 0;
    transition: 1s;

    &:hover{
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.2);
    };
    &:active{
        background-color: hsl(180, 100%, 35%);
    };
    @media (max-width: 767px) {  
        flex-basis: 100%;
        flex-shrink: 1;
        transition: 0s;  
    }
`;

export const StyledFormInput = styled.input`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 500px;
    padding: 10px;
    border: 1px solid #ccc;
`;