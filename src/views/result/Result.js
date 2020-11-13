/**
 * @description 게임 끝난 후 결과 창
 */

import React from 'react';

import { Video } from 'components/utils/backgroundvideo';

const Result = ({ grade }) => {
  React.useEffect(() => {
    document.querySelector('video').playbackRate = 0.7;
  }, []);

  return (
    <div>
      grade
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
        }}
      >
        <source src={Video.HomeVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Result;
