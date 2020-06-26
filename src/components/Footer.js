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

const Footer = ({title}) => {
    
    const year = new Date().getFullYear();
    
    return ( 
        <>
        <footer
            css={css`
                background-color: rgb(44,62,80);
                margin-top: 5rem;
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
        </footer>
        <p
            css={css`
                text-align: center;
                color: #fff;
                background-color: rgb(33,44,55);
                margin: 0;
                padding: 1rem;
          `}
        >{title}. Todos los derechos reservados {year} &copy; </p>
        </>
     );
}
 
export default Footer;