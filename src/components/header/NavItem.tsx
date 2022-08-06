import { NavItemProps } from '@types';
import { NavLink } from 'react-router-dom';

export const NavItem = ({
  item,
  onClick = () => {},
}: {
  item: NavItemProps;
  onClick?: () => void;
}) => (
  <li key={item.link}>
    <NavLink
      to={item.link}
      onClick={onClick}
      className={({ isActive }) =>
        `font-light uppercase hover:text-indigo-600 my-8 border-indigo-600 ${
          isActive ? 'text-indigo-600 border-b-2' : ''
        }`
      }
    >
      {item.title}
    </NavLink>
  </li>
);
