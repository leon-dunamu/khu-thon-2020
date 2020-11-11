import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const standard = 3;

const animation = (status) => {
  return keyframes`
    0%{
      left: ${40 + 15 * ((Math.abs(status - 1) % 7) - standard)}%;
      top : 30%;
      transform : scale(${status === 3 ? 1 : status === 4 ? 1.56 : 1});
      background-color : ${
        status === 3
          ? `rgba(150,150,150,1)`
          : status === 4
          ? `rgba(200,200,200,1)`
          : `rgba(150,150,150,1)`
      };
      z-index: ${10 - 2 * Math.abs(status - standard)};
    }
    100%{
      left: ${40 + 15 * ((status % 7) - standard)}%;
      top : 30%;
      transform : scale(${
        status === 3 ? 1.56 : Math.abs(standard - status) === 1 ? 1.2 : 1
      })
        };
      background-color : ${
        status === 3 ? `rgba(200,200,200,1)` : `rgba(150,150,150,1)`
      };
      z-index: ${10 - 2 * Math.abs(status - standard)};
  `;
};

export const MenuWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
  height: 700px;
  width: 100%;
  background-color: rgba(155, 155, 155, 0.1);
  overflow: hidden;
`;

export const SLink = styled(Link)`
  position: absolute;
  color: white;
  font-size: 60px;
  font-weight: 400;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  /* transform: ${(props) => {
    setTimeout(() => {
      console.log('hello');

      return props.status === 3 ? `scale(1.4)` : `scale(1)`;
    }, 0);
  }}; */
  transform: ${(props) =>
    props.status === 3
      ? `scale(1.56)`
      : Math.abs(props.status - standard) === 1
      ? `scale(1.2)`
      : `scale(1)`};

  left: ${(props) => 40 + 15 * (props.status - standard)}%;
  top: 30%;

  z-index: ${(props) => 10 - 2 * Math.abs(props.status - standard)};

  background-color: ${(props) =>
    props.status === 3 ? 'rgba(200,200,200,1)' : `rgba(150,150,150,1)`};
  /* opacity: ${(props) => 1 - 0.1 * Math.abs(props.status - 3)}; */
  box-shadow: 0px 0px 32px -4px rgba(255, 255, 255, 1);

  animation: ${(props) => animation(props.status)} 1.2s;
`;
