import React from 'react';
import Navigation from './Navigation';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const LogoLink = styled(Link)`
    color: #FFFFFF;
    text-align: center;
    text-decoration: none;
`;

const Header = () => {
    return ( 
        <header
            css={css`
                background-color: rgb(44,62,80);
                padding: 1rem;
            `}
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <LogoLink to='/'>
                    <h1>Gatsby Hotel</h1>
                </LogoLink>
                
                <Navigation />

            </div>
        </header>
        
     );
}
 
export default Header;