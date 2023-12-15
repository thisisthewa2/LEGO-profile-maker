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
  const downloadProfileImage = async () => {
    if (!profileRef.current) return;

    try {
      const div = profileRef.current;
      const canvas = await html2canvas(div, {
        // 배경을 투명하게 설정
        backgroundColor: null,
        scale: 2,
      });

      canvas.toBlob((blob) => {
        if (blob !== null) {
          const url = window.URL.createObjectURL(blob);

          // 가상의 a 태그를 생성하여 클릭 이벤트를 발생시킴
          const link = document.createElement('a');
          link.href = url;
          link.download = 'result.png';
          link.click();

          window.URL.revokeObjectURL(url); // 사용한 URL 해제
        }
      });
    } catch (error) {
      console.error('Error converting div to image:', error);
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
