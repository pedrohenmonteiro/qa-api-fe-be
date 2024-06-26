import React from "react";

type ContainerProps = {
  size?: "larger" | "smaller";
  children: React.ReactNode;
};

const Container = ({ children, size = "larger" }: ContainerProps) => {
  return (
    <div className={`m-auto ${size == "larger" ? "max-w-6xl" : "max-w-3xl"}`}>
      {children}
    </div>
  );
};

export default Container;
