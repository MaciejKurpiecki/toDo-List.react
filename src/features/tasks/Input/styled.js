import styled from "styled-components";

export default styled.input`
    flex-grow: 1;
    min-width: 100px;
    width:100%;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.border};
`;