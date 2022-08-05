import placeholder from '../assets/placeholder.png';

export const HomePage = () => (
  <div className="leading-10 text-3xl antialiased font-light max-w-screen-sm">
    Hi there! I’m Marius Colacioiu – <span className="font-medium">Engineering Leader</span> and{' '}
    <span className="font-medium">Entrepreneur</span> from Zürich, Switzerland.
    <img
      src={placeholder}
      width="342"
      height="396"
      alt="Marius Colacioiu"
      title="Marius Colacioiu"
      itemProp="image"
    ></img>
  </div>
);
