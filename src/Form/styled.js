import styled from "styled-components";

export const StyledFormContainer = styled.form`
    gap: 20px;
    margin: 2px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) 
    {
        flex-wrap: wrap;
    }
`;

export const StyledFormAddButton = styled.button`
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.secondary};
    border: none;
    padding: 10px;
    flex-shrink: 0;
    flex-grow: 0;
    transition: 0.5s;

    &:hover{
        filter: brightness(120%);
        transform: scale(1.2);
    };
    &:active{
        filter: brightness(140%);
         };
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {  
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
    border: 1px solid ${({ theme }) => theme.colors.border};
`;