/**
 * @description teachable machine으로 웹 캠 키기
 */

import { useEffect, useState } from 'react';
import { tmposeurl } from 'components/utils/tmposeurl';
import { useHistory } from 'react-router-dom';

/* tmpose가 업로드 되어있는 url */
const URL = tmposeurl;
let model, webcam, ctx, labelContainer, maxPredictions;

const dance_sequence_class_name_list = [
  {
    class: 'Class 1',
    time: 9890,
  },
  {
    class: 'Class 2',
    time: 17750,
  },
  {
    class: 'Class 3',
    time: 20370,
  },
  {
    class: 'Class 4',
    time: 22770,
  },
  {
    class: 'Class 5',
    time: 27270,
  },
  {
    class: 'Class 6',
    time: 31570,
  },
  {
    class: 'Class 2',
    time: 34000,
  },
  {
    class: 'Class 3',
    time: 37670,
  },
  {
    class: 'Class 4',
    time: 41070,
  },
  {
    class: 'Class 5',
    time: 45670,
  },
  {
    class: 'Class 7',
    time: 49070,
  },
  {
    class: 'Class 8',
    time: 55740,
  },
  {
    class: 'Class 9',
    time: 59700,
  },
];

let idx = 0;
let _isPlay = false;
let startTime = undefined;

let pCount = 0;
let gCount = 0;
let bCount = 0;

const TmPose = ({ grade, setGrade, isPlay }) => {
  const history = useHistory();
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
    if (_isPlay) {
      if (startTime === undefined) {
        startTime = Date.now();
        return;
      }
      const nowTime = Date.now();
      const gapTime = nowTime - startTime;
      console.log(gapTime, startTime, idx);

      if (idx < dance_sequence_class_name_list.length) {
        if (gapTime - 300 > dance_sequence_class_name_list[idx].time) {
          const g = Math.floor(Math.random() * 3);
          if (g === 0) bCount = bCount + 1;
          else if (g === 1) gCount = gCount + 1;
          else if (g === 2) pCount = pCount + 1;
          setGrade({
            idx: idx++,
            // grade: Math.floor(Math.random() * 3),
            grade: g,
          });
        } else {
          if (
            prediction
              .find(
                (x) =>
                  x.className === dance_sequence_class_name_list[idx].class,
              )
              .probability.toFixed(2) > 0.8
          ) {
            if (
              Math.abs(gapTime - dance_sequence_class_name_list[idx].time) < 120
            ) {
              setGrade({
                idx: idx++,
                grade: 2,
              });
            } else if (
              Math.abs(gapTime - dance_sequence_class_name_list[idx].time) < 200
            ) {
              setGrade({
                idx: idx++,
                grade: 1,
              });
            } else {
              const g = Math.floor(Math.random() * 3);
              if (g === 0) bCount = bCount + 1;
              else if (g === 1) gCount = gCount + 1;
              else if (g === 2) pCount = pCount + 1;
              setGrade({
                idx: idx++,
                // grade: Math.floor(Math.random() * 3),
                grade: g,
              });
            }
          }
        }
      } else {
        setTimeout(() => {
          webcam.stop();
          history.push('/result', {
            grade: [bCount, gCount, pCount],
          });
        }, 7000);
      }
    }

    drawPose(pose);
  };

  useEffect(() => {
    setTimeout(() => {
      init();
    }, 500);
  }, []);

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
