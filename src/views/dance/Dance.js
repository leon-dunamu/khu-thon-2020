/**
 * @description 춤 출 수 있는 페이지
 */

import React, { useState } from 'react';
import TmPose from './TmPose';

const Dance = () => {
  const [grade, setGrade] = useState(0);

  return (
    <>
      {/* <TmPose grade={grade} setGrade={setGrade} /> */}
      <div>
        <canvas id="canvas"></canvas>
      </div>
      <div id="label-container"></div>
    </>
  );
};

export default Dance;
