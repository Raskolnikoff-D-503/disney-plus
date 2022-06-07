import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {MovieType, Nullable} from '@/types/types';

type MoviesLayoutProps = {
  title: string;
  data: Nullable<MovieType[]>;
};

export const MoviesLayout = ({title, data}: MoviesLayoutProps) => {
  if (!data) {
    return null;
  }

  return (
    <Container>
      <h4>{title}</h4>
      <Content>
        {data &&
          data.map((item, key) => (
            <Wrap key={key}>
              {item.id}
              <Link to={`/detail/${item.id}`}>
                <img src={item.cardImg} alt={item.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  } ;
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
