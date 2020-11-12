/**
 * @description 춤 출 수 있는 페이지
 */

import React, { useState } from 'react';

import * as s from './Dance.styled';

import TmPose from './TmPose';
import { Video } from 'components/utils/backgroundvideo';

const Dance = () => {
  const [grade, setGrade] = useState(0);

  const play = () => {
    const video = document.getElementById('dance-video');
    console.log(video);
    video.play();
  };

  return (
    <s.Wrapper>
      {/* <TmPose grade={grade} setGrade={setGrade} /> */}
      <video
        id="dance-video"
        preload="auto"
        volume="0"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
        }}
      >
        <source src={Video.DanceVideo} type="video/mp4" />
      </video>
      <s.CamContainer>
        <canvas id="canvas"></canvas>
      </s.CamContainer>
      <div id="label-container" style={{ opacity: 0 }}></div>
      <s.VideoPlayButton onClick={play}>play</s.VideoPlayButton>
      <s.CorrectPoseContainer></s.CorrectPoseContainer>
    </s.Wrapper>
  );
};

export default Dance;
