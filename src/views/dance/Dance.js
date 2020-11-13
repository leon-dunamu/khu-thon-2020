/**
 * @description 춤 출 수 있는 페이지
 */

import React, { useState, useEffect } from 'react';

import * as s from './Dance.styled';

import JudgementHeader from './judgement/JudgementHeader';
import TmPose from './TmPose';
import { Video } from 'components/utils/backgroundvideo';

const Dance = () => {
  const [grade, setGrade] = useState(0);

  const play = () => {
    const video = document.getElementById('dance-video');
    console.log(video);
    video.play();
  };

  useEffect(() => {
    const i = setInterval(() => {
      setGrade((p) => {
        if (p < 2) return p + 1;
        else return 0;
      });
    }, 5000);
    return () => clearInterval(i);
  }, []);

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
        {/* <TmPose grade={grade} setGrade={setGrade} /> */}

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
        {/* <s.CamContainer>
          <canvas id="canvas"></canvas>
        </s.CamContainer> */}
        <div id="label-container" style={{ opacity: 0 }}></div>
        <s.VideoPlayButton onClick={play}>play</s.VideoPlayButton>
        <s.CorrectPoseContainer></s.CorrectPoseContainer>
      </s.Wrapper>
    </div>
  );
};

export default Dance;
