import { MESSAGES, trackPage } from '@config';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import placeholder from '../assets/placeholder.png';

const HelloMessage = () => (
  <div className="leading-10 text-3xl antialiased font-light max-w-screen-sm mb-20 mx-auto">
    Hi there! I’m Marius Colacioiu – <span className="font-medium">Engineering Leader</span> and{' '}
    <span className="font-medium">Entrepreneur</span> from Zürich, Switzerland.
  </div>
);

const MainImage = () => (
  <div className="mb-8">
    <img
      className="flex m-auto"
      src={placeholder}
      width="342"
      height="396"
      alt="Marius Colacioiu"
      title="Marius Colacioiu"
      itemProp="image"
    ></img>
  </div>
);

const AboutMeMessage = () => (
  <div className="lg:mx-28 md:mx-20">
    {MESSAGES.HOME_PAGE.map((line, index) => (
      <p key={index} className="mb-8 font-light text-xl sm:text-lg">
        {line}
      </p>
    ))}
  </div>
);

const ReachOutMessage = () => (
  <div className="leading-10 text-3xl antialiased font-light mb-20 mx-auto">
    Checkout my{' '}
    <NavLink to="about" className="text-indigo-700 hover:text-indigo-500">
      work
    </NavLink>{' '}
    experience or{' '}
    <NavLink to="contact" className="text-indigo-700 hover:text-indigo-500">
      get in touch
    </NavLink>{' '}
    if you want to reach out.
  </div>
);

export const HomePage = () => {
  useEffect(() => trackPage('/'));
  return (
    <div className="lg:mx-20">
      <HelloMessage />
      <MainImage />
      <AboutMeMessage />
      <ReachOutMessage />
    </div>
  );
};
