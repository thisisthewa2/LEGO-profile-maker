// Profile 컴포넌트
import React, { forwardRef, ForwardedRef } from 'react';
import html2canvas from 'html2canvas';

interface ProfileProps {
  backgroundColor?: string;
  profileRef: ForwardedRef<HTMLDivElement>;
}

const Profile = forwardRef(
  (props: ProfileProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { backgroundColor, profileRef } = props;

    return (
      <div
        ref={profileRef}
        className="font-black flex items-center justify-center rounded-full w-80 h-80"
        style={{ backgroundColor: backgroundColor || 'white' }}
      >
        <span className="font-black">Profile</span>
      </div>
    );
  },
);

export default Profile;
Profile.displayName = 'Profile';
