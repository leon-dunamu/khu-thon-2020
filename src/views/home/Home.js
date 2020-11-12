/**
 * @description 메인 홈 화면
 */

import React, { useEffect, useState } from 'react';

import * as s from './Home.styled';

import { Music } from 'components/utils/music';
import { Video } from 'components/utils/backgroundvideo';

const game_number = 7;

const Home = () => {
  const [center, setCenter] = useState(3);

  const moveTrack = () => setCenter((prev) => prev + 1);

  useEffect(() => {
    document.querySelector('video').playbackRate = 0.7;
  }, []);

  return (
    <>
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
      <s.MenuWrapper>
        {game_list.map((game, idx) => {
          const currentIdx = Math.abs(center - (3 - idx)) % game_number;

          return (
            <s.SLink
              key={game.title}
              to={currentIdx === 3 ? '/dance' : null}
              status={currentIdx}
            >
              <s.SImg src={game.src} alt="game-image" />
              <s.DescContainer>
                <s.Title current={currentIdx === 3}>{game.titile}</s.Title>
                <s.Singer current={currentIdx === 3}>{game.singer}</s.Singer>
                {currentIdx === 3 && (
                  <s.PlayButton>
                    <i
                      className="icon-play"
                      style={{ fontSize: 30, color: '#778beb' }}
                    />
                  </s.PlayButton>
                )}
              </s.DescContainer>
            </s.SLink>
          );
        })}
      </s.MenuWrapper>
      <s.NextButton onClick={() => moveTrack()}>
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
    titile: 'Moves Like Jagger',
    singer: 'Maroon 5',
    src: Music.moveslikejagger,
  },
  {
    titile: 'Bang Bang Bang',
    singer: 'Big-Bang',
    src: Music.bangbangbang,
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
