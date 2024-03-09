// HorizontalScrollSection.js

import React from 'react';

const HorizontalScrollSection = ({ children }) => {
  return (
    <div className="overflow-x-auto whitespace-no-wrap md:pl-0">
      <div className="flex">
        {children}
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
