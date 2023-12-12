import React, { useState } from 'react';
import Image from 'next/image';
import infoPic from '../../../public/images/info.svg';

interface PageInfoPopupProps {
  onClose: () => void; // onClose 함수 추가
}

const PageInfoPopup = ({ onClose }: PageInfoPopupProps) => {
  return (
    <div className="tooltip-container flex items-center" onClick={onClose}>
      <div className="tooltip" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}></button>
        <div className="tooltiptext justify-center text-center w-96 h-20 break-normal">
          <span>
            이 프로젝트는 팬 메이드이며, 수익을 창출하지 않습니다. <br />
            This project is fan-made and is not monetized.
          </span>
        </div>
      </div>
    </div>
  );
};

const PageInfo = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="flex items-center">
      <button onClick={() => setShowPopup(!showPopup)}>
        <Image src={infoPic} alt="Logo" width={24} height={24} />
      </button>
      {showPopup && <PageInfoPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default PageInfo;
