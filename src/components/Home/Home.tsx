import React from 'react';
import styled from 'styled-components';
import IMAGES from '@/assets';

export const Home = () => {
  return (
    <Container>
      <h2>HELLO</h2>
      <h2>HELLO</h2>
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url(${IMAGES.homeBackground}) center center / cover no-repeat
      fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
