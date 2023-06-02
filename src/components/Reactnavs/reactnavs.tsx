import React from 'react';
import './style.scss'
export interface NavItem {
  title: string;
  url: string;
}

export interface NavbarProps {
  title?: string;
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ title, navItems }) => {
  return (
    <nav className='navbar'>
      {title && <div>{title}</div>}
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
