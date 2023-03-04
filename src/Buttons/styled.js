import styled from "styled-components";

export const StyledButton = styled.button`
    color: ${({ theme }) => theme.colors.main};
    border: none;
    background-color: ${({ theme }) => theme.colors.transparent};
    padding: 0 10px;
    font-size: 18px;
    transition: 0.3s;

    &:disabled{
        color: ${({ theme }) => theme.colors.disable};
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        flex-basis: 100%;
        margin: 20px auto;
        transition: 0s;
    }
`;
export const ButtonsContainer = styled.div`

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        display: flex;
        flex-wrap: wrap;
        flex-basis: 100%;
        text-align: center;
        margin-top: 10px;
    }
`