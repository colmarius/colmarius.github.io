import './Header.css';

import React from 'react';

import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

export const Header = () => (
  <div className="flex items-center justify-between py-8">
    <a href="/" className="uppercase text-bold text-3xl hover:text-indigo-700">
      MC
    </a>
    <nav>
      <MobileMenu />
      <DesktopMenu />
    </nav>
  </div>
);
