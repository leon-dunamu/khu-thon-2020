/**
 * @description 메인 홈 화면
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Video from 'components/utils/backgroundvideo';

import * as s from './Home.styled';

const game_number = 7;

const Home = () => {
  const [center, setCenter] = useState(3);

  const moveTrack = (direction) => {
    switch (direction) {
      case 'prev':
        setCenter((prev) => prev - 1);
        break;
      case 'next':
        setCenter((prev) => prev + 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.querySelector('video').playbackRate = 0.7;
  }, []);

  return (
    <>
      <video
        preload="auto"
        autoPlay="true"
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
        <source src={Video} type="video/mp4" />
      </video>
      <s.MenuWrapper>
        {game_list.map((game, idx) => (
          <s.SLink
            key={game.title + idx}
            to={Math.abs(center - (3 - idx)) === 3 ? '/dance' : null}
            status={Math.abs(center - (3 - idx)) % game_number}
          >
            <s.SImg src={game.src} alt="game-image" />
            <s.DescContainer>
              <s.Title current={Math.abs(center - (3 - idx)) === 3}>
                {game.titile}
              </s.Title>
              <s.Singer current={Math.abs(center - (3 - idx)) === 3}>
                {game.singer}
              </s.Singer>
            </s.DescContainer>
          </s.SLink>
        ))}
      </s.MenuWrapper>
      <s.NextButton onClick={() => moveTrack('next')}>
        <i
          className="icon-right-open"
          style={{ fontSize: 28, marginLeft: 5 }}
        />
      </s.NextButton>
    </>
  );
};

export default Home;

const game_list = [
  {
    titile: 'game',
    singer: 0,
    src: '',
  },
  {
    titile: 'game',
    singer: 0,
    src: '',
  },
  {
    titile: 'game',
    singer: 0,
    src: '',
  },
  {
    titile: 'game',
    singer: 0,
    src: '',
  },
  {
    titile: 'game',
    singer: 0,
    src: '',
  },
  {
    titile: 'game',
    singer: 0,
    src: '',
  },
  {
    titile: 'game',
    singer: 0,
    src: '',
  },
];
