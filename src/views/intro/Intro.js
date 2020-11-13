/**
 * @description 게임 시작 전 초기화면
 */

import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import { Video } from 'components/utils/backgroundvideo';

import * as s from './Intro.styled';

const Intro = () => (
  <s.Container to="/list">
    <video
      preload="auto"
      autoPlay={true}
      loop="loop"
      muted="muted"
      volume="0"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        minWidth: '100%',
        minHeight: '100%',
        zIndex: -3,
      }}
    >
      <source src={Video.HomeVideo} type="video/mp4" />
    </video>
    <s.Content>
      <s.Logo />
      <s.DescContainer>
        <s.Guide>CLICK ANYWHERE TO PLAY</s.Guide>
        <AiFillCaretDown color="white" size="30px" />
      </s.DescContainer>
    </s.Content>
  </s.Container>
);

export default Intro;
