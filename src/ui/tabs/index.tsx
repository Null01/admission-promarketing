'use client';

import React, { Children, useState } from 'react';

export const Tabs: React.FC = ({ children }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="flex flex-col">
      <ul className="flex flex-row overflow-auto p-2">
        {Children.map(children, (child, index) => (
          <li key={index}
              className={`px-3 py-2 rounded-t-lg cursor-pointer ${
                activeTabIndex === index
                  ? 'font-bold border-b-2 border-[var(--default-tab-enable)]'
                  : '  border-b-2 border-[var(--default-tab-disable)]'
              }`}
              onClick={() => handleTabClick(index)}>
            {child.props.title}
          </li>
        ))}
      </ul>

      {children.map((child, index) => (
        <React.Fragment key={index}>
          {React.cloneElement(child, { ...child.props, isActive: index === activeTabIndex })}
        </React.Fragment>
      ))}

    </div>
  );
};

interface TabProps {
  title?: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export const Tab: React.FC<TabProps> = ({ children, isActive }) => {
  const className = `pl-4 pt-2 pr-4 ${isActive ? '' : 'hidden'}`;
  return (<div className={className}>{children}</div>);
};
