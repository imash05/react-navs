import React, { ReactNode } from "react";

interface NavProps {
  brandText: string;
  children: ReactNode;
}

const Reactnavs: React.FC<NavProps> = ({ brandText, children }) => {
  return (
    <nav>
      <button>{brandText}</button>
      <div>{children}</div>
    </nav>
  );
};

export default Reactnavs;
