'use client';
import React, { useRef, useState } from 'react';
import AvatarEditor from './components/AvatarEditor';
import Profile from './components/Profile';
import Header from './components/Header';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import Wheel from '@uiw/react-color-wheel';

const Home = () => {
  const profileRef = useRef(null);
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  // 프로필 이미지 다운로드 함수
  // 프로필 이미지 다운로드 함수
  const downloadProfileImage = () => {
    if (profileRef && profileRef.current) {
      html2canvas(profileRef.current, {
        // 배경을 투명하게 설정
        backgroundColor: 'transparent',
      }).then((canvas) => {
        // 캡처된 canvas를 blob으로 변환
        canvas.toBlob((blob) => {
          // blob을 파일로 저장
          if (blob) {
            saveAs(blob, 'profile.png');
          }
        }, 'image/png');
      });
    }
  };
  return (
    <div className="flex flex-col justify-center max-w-screen-2xl">
      <Header />
      <div className="flex justify-center items-center p-10">
        <Wheel
          width={100}
          height={100}
          color={hsva}
          onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
        />
        <Profile
          profileRef={profileRef}
          style={{ backgroundColor: `hsl(${hsva.h}, ${hsva.s}%, ${hsva.v}%)` }}
        />
      </div>
      <button onClick={downloadProfileImage}>Download Profile</button>
      <AvatarEditor />
    </div>
  );
};

export default Home;
