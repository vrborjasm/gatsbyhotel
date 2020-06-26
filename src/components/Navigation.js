import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    justify-content:center;
    padding-bottom: 3rem;

    @media (min-width: 768px) {
        padding-bottom: 0;
    }
`;

const NavLink = styled(Link)`
    color: #FFFFFF;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: 'PT Sans', san-serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;

    &:last-of-type {
        margin-right: 0;
    }

    &.activeLink {
        border-bottom: 2px solid #FFFFFF;
    }
`;

const Navigation = () => {
    return ( 
        <Nav>
            <NavLink to={'/'} activeClassName="activeLink">Inicio</NavLink>
            <NavLink to={'/us'} activeClassName="activeLink">Nosotros</NavLink>
        </Nav>
     );
}
 
export default Navigation;