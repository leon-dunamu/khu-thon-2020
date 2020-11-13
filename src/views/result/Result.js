/**
 * @description 게임 끝난 후 결과 창
 */

import React, { useState } from 'react';

import { Video } from 'components/utils/backgroundvideo';

import * as s from './Result.styled';
import IsSpecial from 'components/syntax/IsSpecial';
import { Link } from 'react-router-dom';

const Result = ({ grade }) => {
  const [_grade, setGrade] = useState(grade || [100, 100, 100]);
  const [nickname, setNickname] = useState('');

  const animateValue = (id, start, end, duration) => {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
      current += increment;
      obj.innerHTML = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  const onChange = (e) => {
    const { target: value } = e;

    if (IsSpecial(value)) return;

    setNickname(value);
  };

  React.useEffect(() => {
    const id_list = ['perfect', 'good', 'bad'];
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        animateValue(id_list[i], 0, _grade[2 - i], 800);
      }, i * 600);
    }
    setTimeout(() => {
      const total = _grade[0] + _grade[1] + _grade[2];

      animateValue('total', 0, total, 800);
    }, 2000);
  }, []);

  React.useEffect(() => {
    document.querySelector('video').playbackRate = 0.7;
  }, []);

  const SaveGrade = () => {};

  return (
    <s.Container>
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
      <s.ResultContainer>
        <s.Title>RESULT</s.Title>
        <s.Row style={{ marginTop: 42 }}>
          <s.ResultTitle type="perfect">PERFECT</s.ResultTitle>
          <s.ResultGrade id="perfect"></s.ResultGrade>
        </s.Row>
        <s.Row>
          <s.ResultTitle type="good">GOOD</s.ResultTitle>
          <s.ResultGrade id="good"></s.ResultGrade>
        </s.Row>
        <s.Row>
          <s.ResultTitle type="bad">BAD</s.ResultTitle>
          <s.ResultGrade id="bad"></s.ResultGrade>
        </s.Row>
        <s.Row total>
          <s.ResultTitle type="total" total>
            TOTAL
          </s.ResultTitle>
          <s.ResultGrade id="total"></s.ResultGrade>
        </s.Row>
        <s.EnrollContainer>
          <s.EnrollTitle>SAVE YOUR GRADE</s.EnrollTitle>
          <s.InputWrapper>
            <s.SInput
              type="nickname"
              name="nickname"
              placeholder="NICKNAME"
              onChange={onChange}
            />
            <s.SaveButton onClick={SaveGrade}>SAVE</s.SaveButton>
          </s.InputWrapper>
          <s.HomeButton>
            <s.SLink to="/dance">GO HOME</s.SLink>
          </s.HomeButton>
        </s.EnrollContainer>
      </s.ResultContainer>
    </s.Container>
  );
};

export default Result;
