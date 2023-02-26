import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
    padding: 10px 25PX;
    background-color: ${({ theme }) => theme.colors.secondary};
    gap: 20px;
    margin: 2px;

    ${({ header }) => header && css`
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;

            @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {    
                flex-wrap: wrap;    
            }
    `}

    ${({ content }) => content && css`
        padding: 25px;
        margin-bottom: 15px;
    `}
`;