import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// 게임의 중앙 값
const standard = 3;

const animation = (status) => {
  return keyframes`
    0%{
      left: ${39 + 15 * ((Math.abs(status - 1) % 7) - standard)}%;
      top : 20%;
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
      left: ${39 + 15 * ((status % 7) - standard)}%;
      top : 20%;
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
  /* background-color: rgba(155, 155, 155, 0.1); */
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
  padding: 12px;
  overflow: hidden;

  transform: ${(props) =>
    props.status === 3
      ? `scale(1.56)`
      : Math.abs(props.status - standard) === 1
      ? `scale(1.2)`
      : `scale(1)`};

  left: ${(props) => 39 + 15 * (props.status - standard)}%;
  top: 20%;

  z-index: ${(props) => 10 - 2 * Math.abs(props.status - standard)};

  background-color: ${(props) =>
    props.status === 3 ? 'rgba(200,200,200,1)' : `rgba(150,150,150,1)`};
  /* opacity: ${(props) => 1 - 0.1 * Math.abs(props.status - 3)}; */
  box-shadow: 0px 0px 32px -4px rgba(255, 255, 255, 1);

  animation: ${(props) => animation(props.status)} 1.2s;
`;

export const SImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  position: absolute;
  left: 0;
  top: 0;
`;

export const DescContainer = styled.div`
  position: absolute;
  bottom: 4%;
  left: 4%;
  width: 92%;
  height: 25%;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  width: 88%;
  font-size: ${(props) => (props.current ? 24 : 18)}px;
  font-weight: 600;
  margin-bottom: 8%;
  color: white;
`;

export const Singer = styled.h3`
  width: 88%;
  font-size: ${(props) => (props.current ? 18 : 13)}px;
  font-weight: 400;
  color: white;
`;

export const NextButton = styled.button`
  position: absolute;
  bottom: 54px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 70px;
  border-radius: 42px;
  background-color: rgba(200, 200, 200, 1);
  box-shadow: 0px 0px 30px -4px rgba(255, 255, 255, 0.8);
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s;

  &:focus {
    outline: none;
  }
  &:hover {
    box-shadow: 0px 0px 42px -4px rgba(255, 255, 255, 1);
    background-color: #999;
    transition: all 0.3s;
  }
`;
