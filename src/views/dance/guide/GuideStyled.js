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
  animation-play-state: ${(props) => (props.isPlay ? 'running' : 'paused')};
  animation-name: ${circle};
  animation-duration: ${(props) => `${props.delay}s`};
  animation-iteration-count: infinite;
`;

export const GImage = styled.img`
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  width: 200px;
  height: 200px;
  border: 0;
  filter: invert(100%);
`;
