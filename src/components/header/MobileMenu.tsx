import { NAVIGATION_ITEMS } from '@config';
import { useState } from 'react';

import { HamburgerIcon } from './HamburgerIcon';
import { NavItem } from './NavItem';

export const MobileMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleMobileMenu = () => setIsNavOpen((prev) => !prev);
  return (
    <section className="flex lg:hidden">
      <HamburgerIcon onClick={toggleMobileMenu} />
      <div className={isNavOpen ? 'show-menu-nav' : 'hide-menu-nav'}>
        <div className="absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
          <svg
            className="h-8 w-8 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="2" y2="22" />
            <line x1="2" y1="2" x2="22" y2="22" />
          </svg>
        </div>
        <ul className="flex flex-col items-center justify-between min-h-[250px]">
          {NAVIGATION_ITEMS.map((item) => (
            <NavItem key={item.link} item={item} onClick={toggleMobileMenu} />
          ))}
        </ul>
      </div>
    </section>
  );
};
