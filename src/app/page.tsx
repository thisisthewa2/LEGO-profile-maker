'use client';
import React, { useRef } from 'react';
import AvatarEditor from './components/AvatarEditor';
import Profile from './components/Profile';
import Header from './components/Header';
import html2canvas from 'html2canvas';

const Home = () => {
  const profileRef = useRef<HTMLDivElement>(null);

  // 프로필 이미지 다운로드 함수
  const downloadProfileImage = () => {
    if (profileRef && profileRef.current) {
      html2canvas(profileRef.current, {
        // 배경을 투명하게 설정
        backgroundColor: 'transparent',
      }).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'profile.png';
        link.click();
      });
    }
  };

  return (
    <div className="flex flex-col justify-center max-w-screen-2xl">
      <Header />
      <div className="flex justify-center items-center p-10">
        <Profile profileRef={profileRef} backgroundColor="lightblue" />
      </div>
      <button onClick={downloadProfileImage}>Download Profile</button>
      <AvatarEditor />
    </div>
  );
};

export default Home;
