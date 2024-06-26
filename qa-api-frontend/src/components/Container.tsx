import React from "react";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="max-w-6xl m-auto">{children}</div>;
};

export default Container;
