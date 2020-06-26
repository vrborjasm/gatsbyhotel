import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const ContentHome = () => {
    
    const TextHome = styled.div`
        padding-top: 4rem;
        max-width: 1200px;
        width: 95%;
        margin: 0 auto;

        @media (min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 2rem;
        }

        p {
            line-height: 2;
        }
    `;

    const info = useStaticQuery(graphql`
        query {
            allDatoCmsPage(filter: { slogan: { eq: "Inicio"} }){
            nodes {
                title
                content
                image {
                fluid {
                    ...GatsbyDatoCmsFluid
                }
                }
            }
            }
        }
    `)
    
    const { title, content, image } = info.allDatoCmsPage.nodes[0];

    return(
        <>
            <h2
                css={css`
                    text-align: center;
                    font-size: 4rem;
                    margin-top: 4rem;
                `}
            >{title}</h2>

            <TextHome>
                <p>{content}</p>
                <Img fluid={image.fluid} />
            </TextHome>
        </>
    );
}

export default ContentHome