import styled, { keyframes } from 'styled-components';
import LogoImg from 'components/utils/logo';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: default;
  }
`;

export const Content = styled.div`
  width: 800px;
  height: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.div`
  background-image: url(${LogoImg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 400px;
`;

const clickany = keyframes`
0%{
    opacity : .8;
}
30%{
    opacity : 0.1;
}
100%{
    opacity : .8;
}
`;

export const DescContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 80px;

  opacity: 0.8;
  animation: ${clickany} 2.5s infinite;
`;

export const Guide = styled.h1`
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: 400;
  color: white;
`;
