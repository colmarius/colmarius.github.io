import { MESSAGES } from '@config';

import placeholder from '../assets/placeholder.png';

const HelloMessage = () => (
  <div className="leading-10 text-3xl antialiased font-light max-w-screen-sm mb-20">
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
    {MESSAGES.ABOUT_ME.map((line, index) => (
      <p key={index} className="mb-8 font-light text-lg">
        {line}
      </p>
    ))}
  </div>
);

export const HomePage = () => (
  <div className="lg:mx-20">
    <HelloMessage />
    <MainImage />
    <AboutMeMessage />
  </div>
);
