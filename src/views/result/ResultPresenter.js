/**
 * @description 게임 끝난 후 결과 창
 */

import React from 'react';

import { Video } from 'components/utils/backgroundvideo';

import * as s from './Result.styled';

const ResultPresenter = ({
  nickname,
  onChange,
  SaveGrade,
  ranking,
  isLoading,
}) => (
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
            value={nickname}
            placeholder="NICKNAME"
            onChange={onChange}
          />
          <s.SaveButton onClick={SaveGrade}>SAVE</s.SaveButton>
        </s.InputWrapper>
        <s.HomeButton>
          <s.SLink to="/">GO HOME</s.SLink>
        </s.HomeButton>
      </s.EnrollContainer>
    </s.ResultContainer>
    <s.ResultContainer>
      <s.Title>RANKING</s.Title>
      <s.RankContainer>
        {!isLoading &&
          ranking.map((rank, idx) => {
            if (idx > 9) return null;
            else {
              return (
                <s.RankItem>
                  <s.Desc>{idx + 1}.</s.Desc>
                  <s.Desc>{rank.nickname}</s.Desc>
                  <s.Desc>{rank.createdAt}</s.Desc>
                  <s.Desc>{rank.grade}</s.Desc>
                </s.RankItem>
              );
            }
          })}
      </s.RankContainer>
    </s.ResultContainer>
  </s.Container>
);

export default ResultPresenter;
