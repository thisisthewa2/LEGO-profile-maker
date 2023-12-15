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
        backgroundColor: null,
        scale: 2,
      });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, 'result.png');
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
