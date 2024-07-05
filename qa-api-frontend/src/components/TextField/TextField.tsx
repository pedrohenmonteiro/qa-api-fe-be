"use client";

import React, {
  useState,
  ChangeEvent,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement>;
type TextAreaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export type TextFieldProps = {
  onInputChange?: (value: string) => void;
  label?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  error?: string;
  as?: "input" | "textarea";
} & (InputFieldProps | TextAreaFieldProps);

const TextField = ({
  icon,
  iconPosition = "left",
  label,
  name,
  initialValue = "",
  error,
  disabled = false,
  onInputChange,
  as = "input",
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInputChange && onInputChange(newValue);
  };

  const Element = as === "textarea" ? "textarea" : "input";

  return (
    <div
      className={`relative ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {!!label && (
        <label htmlFor={name} className="text-sm text-black cursor-pointer">
          {label}
        </label>
      )}
      <div
        className={`flex items-center bg-white rounded-md p-2 border-2 ${
          error ? "border-red-500" : "border-gray-100"
        } focus-within:ring-2 focus-within:ring-amber-400`}
      >
        {!!icon && (
          <div
            className={`text-gray-500 ${
              iconPosition === "right" ? "order-1" : "order-0"
            }`}
          >
            {icon}
          </div>
        )}
        <Element
          onChange={onChange}
          value={value}
          disabled={disabled}
          name={name}
          className={`flex-1 bg-transparent border-none outline-none text-black ${
            iconPosition === "right" ? "pr-2 pl-0" : "pl-2 pr-0"
          } ${as === "textarea" ? "h-20 resize-none" : ""}`}
          {...(props as InputFieldProps & TextAreaFieldProps)}
          {...(label ? { id: name } : {})}
        />
      </div>
      {!!error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default TextField;
