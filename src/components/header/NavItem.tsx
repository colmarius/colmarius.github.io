import { NavItemProps } from '@types';
import React from 'react';
import { Link } from 'react-router-dom';

export const NavItem = ({
  item,
  onClick = () => {},
}: {
  item: NavItemProps;
  onClick?: () => void;
}) => (
  <li key={item.link}>
    <Link to={item.link} onClick={onClick} className="my-8 uppercase hover:text-indigo-700">
      {item.title}
    </Link>
  </li>
);
