// Profile 컴포넌트
import React, { forwardRef, ForwardedRef } from 'react';

interface ProfileProps {
  backgroundColor?: string;
  profileRef: ForwardedRef<HTMLDivElement>;
  style?: React.CSSProperties; // style 속성 추가
}

const Profile = forwardRef(
  (props: ProfileProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { backgroundColor, profileRef, style } = props;

    return (
      <div
        ref={profileRef}
        className="font-black flex items-center justify-center rounded-full w-80 h-80"
        style={{ backgroundColor: backgroundColor || 'white', ...style }} // style 속성 추가
      >
        <span className="font-black">Profile</span>
      </div>
    );
  },
);

export default Profile;
Profile.displayName = 'Profile';
