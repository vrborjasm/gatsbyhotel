import React from "react";
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Img from '../components/Img';
import ContentHome from '../components/ContentHome';
import PreviewRoom from '../components/PreviewRoom';
import useRoom from '../hooks/useRoom';

const ListRoom = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`;

const IndexPage = () => {

  const rooms = useRoom();

  return(
    <Layout>
      <Img />

      <ContentHome />

      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >Nuestras Habitaciones</h2>

      <ListRoom>
        {rooms.map(room => (
          <PreviewRoom 
            key={room.id}
            room={room}
          />
        ))}
      </ListRoom>

    </Layout>
  );
}

export default IndexPage
