import styled from "styled-components";

export const StyledButtons = styled.button`
    color: teal;
    border: none;
    background-color: transparent;
    padding: 0 10px;
    font-size: 18px;
    transition: 0.3s;

    &:disabled{
        color: #ccc;
    };
    @media (max-width: 767px){
        flex-basis: 700px;
        margin: 20px auto;
    }
`;
export const StyledAllTasksButtons = styled.div`
@media (max-width: 767px) {
        display: flex;
        flex-wrap: wrap;
        flex-basis: 100%;
        text-align: center;
        margin-top: 10px;
}
`