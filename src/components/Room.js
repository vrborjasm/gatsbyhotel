import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from './Layout';
import { css } from '@emotion/core'
export const query = graphql`
    query($slogan: String!) {
        allDatoCmsRoom(filter: { slogan: { eq: $slogan }}) {
            nodes {
                title
                content
                image {
                    fluid(maxWidth: 1200) {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`;

const Room = ({data: { allDatoCmsRoom: { nodes } }}) => {
    
    const { title, content, image } = nodes[0];
    
    return ( 
        <Layout>
            <main
                css={css`
                    margin: 0 auto;
                    max-width: 1200px;
                    width: 95%;
                `}
            >
                <h1
                    css={css`
                        text-align: center;
                        margin-top: 4rem;
                    `}
                >{title}</h1>
                <p>{content}</p>
                <Img fluid={image.fluid} />
            </main>
        </Layout>
     );
}
 
export default Room;