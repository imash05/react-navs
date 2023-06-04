import React from "react";
import "./style.scss";

interface NavItem {
  label: string;
  link: string;
}

interface NavbarProps {
  title?: string;
  subTitle?: string;
  btn?: string;
  navItems: NavItem[];
  dropdownItems?: NavItem[];
}

const RNDefault: React.FC<NavbarProps> = ({
  title,
  subTitle,
  btn,
  navItems,
  dropdownItems,
}) => {
  return (
    <nav className="navbar">
      <div className="brand">
        {title && <h1>{title}</h1>}
        {subTitle && <h2>{subTitle}</h2>}
      </div>

      <ul>
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
      {btn && <button className="RNDefaultBTN" >{btn}</button>}
      {dropdownItems && (
        <select>
          {dropdownItems.map((item) => (
            <option key={item.label}>{item.label}</option>
          ))}
        </select>
      )}
    </nav>
  );
};

const RNDark: React.FC<NavbarProps> = ({ title, navItems }) => {
  return (
    <nav className="navbar-dark">
      {title && <h1>{title}</h1>}
      <ul>
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
      <div>
        <button>Button 1</button>
        <button>Button 2</button>
      </div>
      <select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </nav>
  );
};

export { RNDefault, RNDark, NavbarProps };
