/**
 * @description 게임 끝난 후 결과 창
 */

import React, { useState } from 'react';

import { FirebaseRDB } from 'config/firebase.config';
import IsSpecial from 'components/syntax/IsSpecial';

import ResultPresenter from './ResultPresenter';

const ResultContainer = ({ grade, location }) => {
  console.log(location);
  const [_grade, setGrade] = useState([
    18 * location.state.grade[0],
    53 * location.state.grade[1],
    86 * location.state.grade[2],
  ]);
  const [nickname, setNickname] = useState('');
  const [enable, setEnable] = useState(true);

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
    if (!enable) return;
    if (IsSpecial(e.target.value)) return;

    setNickname(e.target.value);
  };

  React.useEffect(() => {
    setTimeout(() => {
      const id_list = ['perfect', 'good', 'bad'];
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          animateValue(id_list[i], 0, _grade[2 - i], 500);
          console.log(_grade[2 - i]);
        }, i * 600);
      }
      setTimeout(() => {
        const total = _grade[0] + _grade[1] + _grade[2];

        animateValue('total', 0, total, 50);
      }, 2000);
    }, 300);
  }, []);

  React.useEffect(() => {
    document.querySelector('video').playbackRate = 0.7;
  }, []);

  const SaveGrade = () => {
    if (!enable) {
      alert('이미 등록되었습니다');
      return;
    }
    if (nickname === '') {
      alert('닉네임을 입력해주세요');
      return;
    } else if (nickname.length < 3) {
      alert('닉네임은 최소 3자 입니다');
      return;
    }
    const createdAt = Date.now();

    FirebaseRDB.ref(`result/${createdAt}`).set({
      createdAt: createdAt,
      nickname: nickname,
      grade: 300, // need to update
    });
    alert('등록되었습니다');

    // setNickname('');
    setEnable(false);
  };

  return (
    <ResultPresenter
      nickname={nickname}
      onChange={onChange}
      SaveGrade={SaveGrade}
    />
  );
};

export default ResultContainer;
