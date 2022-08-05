import './Header.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { NAVIGATION_ITEMS } from '../config';
import { NavItemProps } from '../types';

const HamburgerIcon = ({ onClick }: { onClick: () => void }) => (
  <div className="space-y-2" onClick={onClick}>
    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
  </div>
);

const NavItem = ({ item, onClick = () => {} }: { item: NavItemProps; onClick?: () => void }) => (
  <li key={item.link}>
    <Link to={item.link} onClick={onClick} className="my-8 uppercase hover:text-indigo-700">
      {item.title}
    </Link>
  </li>
);

const MobileMenu = () => {
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

const DesktopMenu = () => (
  <ul className="hidden space-x-8 lg:flex">
    {NAVIGATION_ITEMS.map((item) => (
      <NavItem key={item.link} item={item} />
    ))}
  </ul>
);

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
