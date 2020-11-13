import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;

export const Header = styled.div`
  /* background-color */
`;

export const CamContainer = styled.div`
  width: 220px;
  height: 220px;
  position: absolute;
  left: 4rem;
  top: 3rem;
  background-color: black;
  border-radius: 5px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideoPlayButton = styled.button`
  color: white;
  position: absolute;
  bottom: 1rem;
  left: 2rem;
`;

export const CorrectPoseContainer = styled.div`
  width: 440px;
  height: 280px;
  background-color: black;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
