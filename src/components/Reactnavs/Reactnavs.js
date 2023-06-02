import React from "react";

const Reactnavs = ({ brandText, children }) => {
  return (
    <nav>
      <button>{brandText}</button>
      <div>{children}</div>
    </nav>
  );
};

export default Reactnavs;
