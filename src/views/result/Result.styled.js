import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const show = (id) => keyframes`
    0%{
        opacity : 0;
        transform : scale(2.5);
    }
    100%{
        opacity : 1;
        transform : none;
    }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const shadow = keyframes`
0%{
  box-shadow: 0px 1px 24px -3px rgba(19, 239, 239, 0.6);

}
50%{
  box-shadow: 0px 1px 60px -3px rgba(19, 239, 239, 0.9);
}
100%{
  box-shadow: 0px 1px 24px -3px rgba(19, 239, 239, 0.6);

}
`;

export const ResultContainer = styled.div`
  width: 420px;
  border-radius: 16px;
  background-color: rgba(80, 80, 80, 0.6);
  height: 560px;
  padding: 24px;
  box-shadow: 0px 1px 24px -3px rgba(19, 239, 239, 0.6);
  position: relative;
  margin: 0 20px;

  animation: ${shadow} 3s both infinite;
`;

export const Title = styled.h1`
  font-size: 62px;
  font-weight: 700;
  text-align: center;
  color: rgb(19, 239, 239);
  margin-bottom: 24px;
  position: absolute;
  top: -31px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Row = styled.div`
  display: flex;
  margin: 12px;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid #666;
  padding-bottom: 12px;

  ${(props) => (props.total ? 'margin-top : 40px;' : null)}
`;

export const ResultTitle = styled.h2`
  /* image */
  width: 80px;
  height: 100%;

  color: ${(props) =>
    props.type === 'total'
      ? 'rgb(19,239,239)'
      : props.type === 'perfect'
      ? '#FFCC00'
      : props.type === 'good'
      ? '#00ff00'
      : '#a9a9a9'};

  font-size: ${(props) => (props.total ? '48px' : '36px')};

  animation-name: ${(props) => show(props.type)};
  animation-duration: 0.2s;
  animation-delay: ${(props) =>
    props.type === 'perfect'
      ? 0
      : props.type === 'good'
      ? 0.8
      : props.type === 'bad'
      ? 1.6
      : 2.2}s;
`;

export const ResultGrade = styled.span`
  font-size: ${(props) => (props.id === 'total' ? '62px' : '36px')};
  font-weight: 500;

  color: ${(props) =>
    props.id === 'total'
      ? 'rgb(19,239,239)'
      : props.id === 'perfect'
      ? '#FFCC00'
      : props.id === 'good'
      ? '#00ff00'
      : '#a9a9a9'};
`;

export const EnrollContainer = styled.div`
  padding: 12px;
`;

export const EnrollTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 24px;
  color: white;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  height: 50px;
`;

export const SInput = styled.input`
  flex-grow: 1;
  margin-right: 8px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 0 12px;
  outline: none;
  color: white;
  font-size: 20px;
  height: 100%;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #afafaf;
  }
`;

export const SaveButton = styled.button`
  width: 70px;
  height: 100%;
  border-radius: 5px;
  background-color: white;
`;

export const HomeButton = styled.div`
  width: 100%;
  background-color: lightcoral;
  margin-top: 24px;
  height: 53px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SLink = styled(Link)`
  font-size: 26px;
  color: white;
`;

/**
 * Rank
 */

export const RankContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const RankItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Desc = styled.span`
  color: white;
  font-size: 24px;
  font-weight: 400;
`;
