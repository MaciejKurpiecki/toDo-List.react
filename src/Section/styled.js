import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
    background-color: #ffffff;
    padding: 10px 25PX;
    background-color: #FFFFFF;
    gap: 20px;
    margin: 2px;

    ${({ header }) => header && css`
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;

            @media (max-width: 767px) {    
                flex-wrap: wrap;    
            }
    `}

    ${({ content }) => content && css`
        padding: 25px;
        margin-bottom: 15px;
    `}
`;