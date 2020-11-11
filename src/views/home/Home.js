/**
 * @description 메인 홈 화면
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Video from 'components/utils/backgroundvideo';

import * as s from './Home.styled';
import { Music } from '../../components/utils/music';

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
            key={game.title}
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
    titile: 'Bang Bang Bang',
    singer: 'Big-Bang',
    src: Music.bangbangbang,
  },
  {
    titile: 'Call Me Maybe',
    singer: 'Carly Rae Jepsen',
    src: Music.callmemaybe,
  },
  {
    titile: 'HandClap',
    singer: 'Fitz and The Tantrums',
    src: Music.handclap,
  },
  {
    titile: '24K Magic',
    singer: 'Bruno Mars',
    src: Music.magic24k,
  },
  {
    titile: 'Slow Heartbeat',
    singer: 'Layone',
    src: Music.slowpump,
  },
  {
    titile: 'Watermelon Sugar',
    singer: 'Harry Styles',
    src: Music.watermelon,
  },
  {
    titile: 'Bad Guy',
    singer: 'Billie Eilish',
    src: Music.badguy,
  },
];
