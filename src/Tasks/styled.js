import styled, { css } from "styled-components";

export const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

export const StyledItem = styled.li`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    ${({ hidden }) => hidden && css`
        display:none;
    `}
`;

export const StyledDoneButton = styled.button`
    background-color: ${({ theme }) => theme.colors.confirm};
    text-decoration: none;
    width: 30px;
    height: 30px;
    border: none;
    order: 1;
    align-self: center;
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.secondary};

    &:hover{
       filter: brightness(120%);
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: 1px;
    };
    &:active{
        filter: brightness(140%);
    }
`;

export const StyledRemoveButton = styled.button`
    background-color: ${({ theme }) => theme.colors.deny};
    height: 30px;
    width: 30px;
    border: none;
    order: 3;
    align-self: center;
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.secondary};

    &:hover{
        filter: brightness(120%);
        border: 1px solid ${({ theme }) => theme.colors.border};
    };
    &:active{
         filter: brightness(140%);
    }
`;

export const StyledTask = styled.span`
    flex-grow: 1;
    order: 2;
    align-self: center;

    ${({ done }) => done && css`
    text-decoration: line-through;
    `}
`;