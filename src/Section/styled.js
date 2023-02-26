import styled from "styled-components";

export const StyledContainerContent = styled.div`
 background-color: #ffffff;
    padding: 10px 25PX;
    background-color: #FFFFFF;
    gap: 20px;
    margin: 2px;
    padding: 25px;
    margin-bottom: 15px;
`;

export const StyledContainerHeader = styled.div`
    background-color: #ffffff;
    padding: 10px 25PX;
    background-color: #FFFFFF;
    gap: 20px;
    margin: 2px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {    
        flex-wrap: wrap;    
    }
`;