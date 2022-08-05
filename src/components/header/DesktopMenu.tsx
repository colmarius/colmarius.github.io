import React from 'react';

import { NAVIGATION_ITEMS } from '../../config';
import { NavItem } from './NavItem';

export const DesktopMenu = () => (
  <ul className="hidden space-x-8 lg:flex">
    {NAVIGATION_ITEMS.map((item) => (
      <NavItem key={item.link} item={item} />
    ))}
  </ul>
);
