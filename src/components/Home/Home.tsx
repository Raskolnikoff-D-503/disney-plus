import React from 'react';
import styled from 'styled-components';
import {ImgSlider, Viewers, Recommends} from '@/components';

import {IMAGES} from '@/assets';
import {NewDisney} from '../NewDisney/NewDisney';
import {Originals} from '../Originals/Originals';
import {Trending} from '../Trending/Trending';

export const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
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
    background: url(${IMAGES.HOME_BACKGROUND_URL}) center center / cover
      no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
