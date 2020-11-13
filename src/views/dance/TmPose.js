/**
 * @description teachable machine으로 웹 캠 키기
 */

import { useEffect, useState } from 'react';
import { tmposeurl } from 'components/utils/tmposeurl';

/* tmpose가 업로드 되어있는 url */
const URL = tmposeurl;
let model, webcam, ctx, labelContainer, maxPredictions;

const dance_sequence_class_name_list = [
  {
    class: 'Class 1',
    time: 10060,
  },
  {
    class: 'Class 1',
    time: 10760,
  },
  {
    class: 'Class 1',
    time: 16380,
  },
  {
    class: 'Class 2',
    time: 18200,
  },
  {
    class: 'Class 3',
    time: 18770,
  },
  {
    class: 'Class 4',
    time: 19180,
  },
  {
    class: 'Class 5',
    time: 19670,
  },
];

let idx = 0;
let _isPlay = false;
let startTime;

const TmPose = ({ grade, setGrade, isPlay }) => {
  const [isLoading, setLoading] = useState(true);

  const [delay, setDelay] = useState(false);

  const init = async () => {
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';

    model = await window.tmPose.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    /* 웹캠 사이즈 조절 */
    const size = 220;
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

  const loop = async () => {
    webcam.update();
    await predict(grade.idx);
    window.requestAnimationFrame(loop);
  };

  _isPlay = isPlay;

  const predict = async () => {
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);

    const prediction = await model.predict(posenetOutput);

    /**
     * @param prediction[i].probability 해당 동작에 대한 점수 / 만점은 1점
     * @description 여기에서 점수 채점
     */
    // for (let i = 0; i < maxPredictions; i++) {
    //   const classPrediction =
    //     prediction[i].className + ': ' + prediction[i].probability.toFixed(2);
    //   labelContainer.childNodes[i].innerHTML = classPrediction;
    // }
    if (_isPlay) {
      if (!startTime) {
        startTime = Date.now();
        return;
      }
      const nowTime = Date.now();
      const gapTime = nowTime - startTime;
      console.log(gapTime);
      if (gapTime > dance_sequence_class_name_list[idx].time) {
        console.log(idx);
        setGrade({
          idx: idx++,
          grade: 0,
        });
      } else {
        if (
          prediction
            .find(
              (x) => x.className === dance_sequence_class_name_list[idx].class,
            )
            .probability.toFixed(2) > 0.8
        ) {
          if (
            Math.abs(gapTime - dance_sequence_class_name_list[idx].time) < 200
          ) {
            setGrade({
              idx: idx++,
              grade: 2,
            });
          } else if (
            Math.abs(gapTime - dance_sequence_class_name_list[idx].time) < 500
          ) {
            setGrade({
              idx: idx++,
              grade: 1,
            });
          } else {
            setGrade({
              idx: idx++,
              grade: 0,
            });
          }
        }
      }
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
