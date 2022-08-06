import './Header.css';

import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

export const Header = () => (
  <div className="flex items-center justify-between pb-20">
    <a href="/" className="text-bold text-3xl hover:text-indigo-600">
      colmarius
    </a>
    <nav>
      <MobileMenu />
      <DesktopMenu />
    </nav>
  </div>
);
