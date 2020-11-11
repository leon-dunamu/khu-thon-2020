/**
 * @description teachable machine으로 웹 캠 키기
 */

import { useEffect, useState } from 'react';

/* tmpose가 업로드 되어있는 url */
const URL = 'https://teachablemachine.withgoogle.com/models/Z9FfIlbCc/';
let model, webcam, ctx, labelContainer, maxPredictions;

const TmPose = ({ grade, setGrade }) => {
  const [isLoading, setLoading] = useState(true);

  const init = async () => {
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';

    model = await window.tmPose.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    /* 웹캠 사이즈 조절 */
    const size = 200;
    const flip = true;
    webcam = new window.tmPose.Webcam(size, size, flip);
    await webcam.setup();
    await webcam.play();
    window.requestAnimationFrame(loop);

    /* 웹캠 html에 삽입 */
    const canvas = document.getElementById('canvas');
    canvas.width = size;
    canvas.height = size;
    ctx = canvas.getContext('2d');
    labelContainer = document.getElementById('label-container');
    for (let i = 0; i < maxPredictions; i++) {
      labelContainer.appendChild(document.createElement('div'));
    }
  };

  const loop = async (timestamp) => {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
  };

  const predict = async () => {
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);

    const prediction = await model.predict(posenetOutput);

    /**
     * @param prediction[i].probability 해당 동작에 대한 점수 / 만점은 1점
     * @description 여기에서 점수 채점
     */
    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction =
        prediction[i].className + ': ' + prediction[i].probability.toFixed(2);
      labelContainer.childNodes[i].innerHTML = classPrediction;
    }

    drawPose(pose);
  };

  useEffect(() => {
    setTimeout(() => {
      init().then(() => setLoading(false));
    }, 300);
  }, []);

  //   return isLoading ? (
  //     <div>loading..</div>
  //   ) : (
  //     <>
  //       <div>
  //         <canvas id="canvas"></canvas>
  //       </div>
  //       <div id="label-container"></div>
  //     </>
  //   );
  return null;
};

function drawPose(pose) {
  if (webcam.canvas) {
    ctx.drawImage(webcam.canvas, 0, 0);

    if (pose) {
      const minPartConfidence = 0.5;
      window.tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
      window.tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
    }
  }
}

export default TmPose;
