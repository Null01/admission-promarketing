'use client';

import React, { useState } from 'react';

interface Tab {
  title: string;
  content: JSX.Element | string;
}

const Tabs: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="flex flex-col">
      <ul className="flex flex-row overflow-auto p-2">
        {tabs.map((tab, index) => (
          <li key={index}
              className={`px-3 py-2 rounded-t-lg cursor-pointer ${
                activeTabIndex === index
                  ? 'font-bold border-b-2 border-[var(--default-tab-enable)]'
                  : '  border-b-2 border-[var(--default-tab-disable)]'
              }`}
              onClick={() => handleClick(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>

      <div className="p-2">
        {tabs[activeTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
