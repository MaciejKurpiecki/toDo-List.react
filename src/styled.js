import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`

color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    
&.active{
    font-weight: bold;
   
};
`;

export const StyledListItem = styled.li`
    list-style-type: none;
    display: inline;
    padding: 20px;
    font-size: larger;
`;

export const StyledNav = styled.div`
    background-color: ${({ theme }) => theme.colors.main};
    max-height: 100px;
    display: flex;
    justify-content: center;
`;