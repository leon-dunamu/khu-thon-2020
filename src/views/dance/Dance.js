/**
 * @description 춤 출 수 있는 페이지
 */

import React, { useState, useEffect } from 'react';

import * as s from './Dance.styled';

import JudgementHeader from './judgement/JudgementHeader';
import TmPose from './TmPose';
import { Video } from 'components/utils/backgroundvideo';

const Dance = () => {
  const [grade, setGrade] = useState({
    grade: undefined,
    idx: 0,
    sum: 0,
  });

  const [isPlay, setPlay] = useState(false);

  const play = () => {
    const video = document.getElementById('dance-video');
    setPlay(true);
    video.play();
  };

  return (
    <div
      style={{
        overflow: 'hidden',
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          width: 'calc(100vw - 20px)',
          height: 120,
          border: '10px double #966E8F',
          borderRadius: 5,
          background: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <JudgementHeader grade={grade} />
      </div>
      <s.Wrapper>
        <TmPose grade={grade} setGrade={setGrade} isPlay={isPlay} />

        <video
          id="dance-video"
          preload="auto"
          volume="0"
          style={{
            position: 'relative',
            // bottom: 0,
            // left: 0,
            width: '100vw',
            // height: '100vh',
          }}
        >
          <source src={Video.DanceVideo} type="video/mp4" />
        </video>
        <s.CamContainer>
          <canvas id="canvas"></canvas>
        </s.CamContainer>
        <div id="label-container" style={{ opacity: 1 }}></div>
        <s.VideoPlayButton onClick={play}>play</s.VideoPlayButton>
        {/* <s.CorrectPoseContainer></s.CorrectPoseContainer> */}
      </s.Wrapper>
    </div>
  );
};

export default Dance;
