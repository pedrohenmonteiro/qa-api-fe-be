import { ButtonHTMLAttributes } from "react";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonTypes) => {
  return (
    <button
      {...props}
      className="bg-amber-400 text-amber-800  rounded py-2 px-4 cursor-pointer hover:bg-amber-500 hover:text-amber-800 transition-all"
    >
      {children}
    </button>
  );
};

export default Button;
