import React from 'react';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import styled from '@emotion/styled'
import { Link } from 'gatsby';

const Button = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color:rgba(44,62,80,.85);
    width: 100%;
    color: #FFFFFF;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    font-family: 'PT Sans', sans-serif;
`;

const PreviewRoom = ({room}) => {

    const { content, image, title, slogan } = room;

    console.log(room);

    return ( 
        <div
            css={css`
                border: 1px solid #e1e1e1;
                margin-bottom: 2rem;
            `}
        >
            <Img fluid={image.fluid} />
            <div
                css={css`
                    padding: 3rem;
                `}
            >
                <h3
                    css={css`
                        font-size: 3rem;
                    `}
                >{title}</h3> 
                <p>{content}</p>

                <Button to={slogan}>Ver Habitacion</Button>
            </div>
        </div> 
    );
}
 
export default PreviewRoom;