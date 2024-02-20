import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(prevState => !prevState);
  };

  return (
    <div className="hamburger-menu flex items-center">
      <button
        className="menu-toggle focus:outline-none"
        onClick={toggleExpanded}
      >
        {expanded ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>
      {/* Other menu items here */}
    </div>
  );
};

export default HamburgerMenu;
