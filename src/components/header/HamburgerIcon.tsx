import React from 'react';

export const HamburgerIcon = ({ onClick }: { onClick: () => void }) => (
  <div className="space-y-2" onClick={onClick}>
    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
  </div>
);
