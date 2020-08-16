import styled from 'styled-components';

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-centent: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  witdh: 100%;

  @media (max-width: 1000px) {
    flex-directon: column;
  }
`;

export const Item = styled.div`
  display: flex;
`;

export const Container = styled.section``;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-witdh: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
