# KHU-THON 2020 대상 🏅

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<br />

### 무료로 집에서 JUST DANCE를 즐겨 보세요 !

> 머신러닝 웹 어플리케이션

<br />

### 프로젝트 기간

2020.11.13 ~ 2020.11.14

<br />

### 시연 영상

- [유튜브](https://youtu.be/BXyxNx0uqLU)

<br />

## 0. 개요

- 집에서 춤을 추며 리듬 게임을 하고는 싶은데, JUST DANCE를 살 여유가 없는 경우
- 춤 연습을 자신의 자세를 봐가며 해보고 싶은 경우

<br />

## 1. 프로젝트 구조 다이어그램

<img src='https://user-images.githubusercontent.com/49581472/99252568-817fd580-2852-11eb-81f4-5c1ac7c33ff1.png' width='100%' />

<br />
<br />

## 2. 해커톤 진행 과정

1. Github에 Create React App을 이용하여 초기 세팅

2. 웹앱의 기본적인 페이지 구현

   - INTRO
     <img src = 'https://user-images.githubusercontent.com/49581472/99253055-65c8ff00-2853-11eb-93a1-9b572b24369f.png' />

   - MUSIC LIST
     <img src = 'https://user-images.githubusercontent.com/49581472/99253059-695c8600-2853-11eb-9873-94cc85ebe230.png' />

   - DANCE
     <img src = 'https://user-images.githubusercontent.com/49581472/99253063-6cf00d00-2853-11eb-85bd-fb33764a18c9.png' />

   - RESULT
     <img src = 'https://user-images.githubusercontent.com/49581472/99253068-6f526700-2853-11eb-9434-cd3e1fed8b09.png' />

3. 노래 선정 및 포즈 선택

<img src= 'https://user-images.githubusercontent.com/49581472/99253245-c22c1e80-2853-11eb-9a58-5d69345e8427.png' />

4. Google Teachable Machine 모델링

   - 춤 특정 동작을 정한 후 웹캠을 통해 유저의 포즈 인식
     <img src='https://user-images.githubusercontent.com/49581472/99253366-f69fda80-2853-11eb-80f2-8d86363411aa.png' />

   - 여러가지 동작들의 샘플을 업로드 후 비정상적인 사진 제거
     <img src='https://user-images.githubusercontent.com/49581472/99253477-2949d300-2854-11eb-8ec7-da668fc16967.png' />

   - 모델 학습
     <img src='https://user-images.githubusercontent.com/49581472/99253482-2b139680-2854-11eb-95b1-b3060a05ba1f.png' />

   - 이후 완성된 모델을 구글 드라이브로 업로드

<br />
<br />

## 아쉬운 점 및 개선 사항

- 아쉬운 점

  - Dance 페이지의 백그라운드 비디오의 용량이 매우 큼 (노래 한 곡에 약 400MB) <br />

    >  <br /> 
    > 👉 &nbsp; Github에 업로드 불가 <br /> <br />
    > 👉 &nbsp; 서버에서 제공하기 부담 예상 <br /> 
    > <br />

    <br />

  - 웹캠의 포즈 인식 지연으로 인해 "정확한" 포즈 타이밍을 잡지 못 함
    >  <br />
    >  👉 &nbsp; 처음 기획을 했던 리듬게임의 "정확성"을 충족하지 못 함 <br /> 
    >  <br />

<br />

- 개선할 점
  - 더 많은 춤을 학습시켜 사용자가 이용함에 있어 더 다양한 춤을 접할 수 있게 한다

### 팀원

경희대학교 김한빈

경희대학교 최원석
