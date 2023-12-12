'use client';
import { useState } from 'react';
import CardTable from './CardTable';
import { AvatarOptions } from '../constants/constant';
import { cardData } from '../constants/constant';

const AvatarEditor = () => {
  const [selectedTab, setSelectedTab] = useState<AvatarOptions>(
    AvatarOptions.HAIRSTYLE,
  );

  const handleTabClick = (tab: AvatarOptions) => {
    setSelectedTab(tab);
  };

  const renderTabContent = () => {
    return <CardTable cards={cardData[selectedTab]} />;
  };

  return (
    <div className="container mx-auto mt-8 o">
      <div className="flex justify-center space-x-4">
        {Object.values(AvatarOptions).map((option) => (
          <button
            key={option}
            onClick={() => handleTabClick(option)}
            className={`px-4 py-2 rounded ${
              selectedTab === option ? 'bg-gray-500 text-white' : 'bg-gray-200'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};

export default AvatarEditor;
