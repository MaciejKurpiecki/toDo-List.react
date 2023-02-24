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
    border-bottom: 1px solid #ccc;

    ${({ hidden }) => hidden && css`
        display:none;
    `}
`;

export const StyledDoneButton = styled.button`
    background-color: green;
    text-decoration: none;
    width: 30px;
    height: 30px;
    border: none;
    order: 1;
    align-self: center;
    flex-shrink: 0;
    color: white;

    &:hover{
        background-color: #009000;
        border: 1px solid #000;
        border-radius: 1px;
    };
    &:active{
        background-color: #00b900;
    }
`;

export const StyledRemoveButton = styled.button`
    background-color: #ff0000;
    height: 30px;
    width: 30px;
    border: none;
    order: 3;
    align-self: center;
    flex-shrink: 0;
    color: white;

    &:hover{
        background-color: #fd3c3c;
    };
    &:active{
        background-color: #ff8484;
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