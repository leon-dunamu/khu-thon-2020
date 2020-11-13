import styled, { keyframes } from 'styled-components';
import GuideImage from 'components/utils/guide';

const circle = keyframes`
0%{
    width : 200px;
    height: 200px;
}
100%{
    width : 0;
    height: 0;
}
`;

export const YellowCircle = styled.div`
  border-radius: 50%;
  border: 2px solid yellow;
  width: 200px;
  height: 200px;
  animation: ${circle} 5s infinite;
`;

export const GImage = styled.img`
  background-image: url(${GuideImage});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  width: 200px;
  height: 200px;
  border: none;
  outline: none;
  filter: invert(100%);
`;
