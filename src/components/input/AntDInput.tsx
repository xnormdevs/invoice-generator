"use client";

import { Form, Input } from "antd";
import React from "react";

export interface IAntDInput {
  name: string;
  value: string | number;
  showLabel?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  variant?: "outlined" | "borderless" | "filled" | undefined;
  size?: "small" | "middle" | "large" | undefined;
  prefix?: React.ReactNode;
  placeholder?: string;
  type?: "text" | "number";
  textColor?: string;
}
const formatNumber = (value: number) => new Intl.NumberFormat().format(value);

const AntDInput = (props: IAntDInput) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (
      (props.type === "number" && reg.test(inputValue)) ||
      inputValue === "" ||
      inputValue === "-"
    ) {
      props.onChange(e);
    } else {
      props.onChange(e);
    }
  };
  return (
    <>
      <Input
        type={props.type}
        name={props.name}
        size={"middle"}
        className={`w-full focus:shadow-md ${props.className} ${
          props.variant === "borderless"
            ? "text-gray-500 focus:ring-gray-400/50 focus:ring-1"
            : ""
        }`}
        value={props.value}
        variant={props.variant}
        onChange={handleChange}
        prefix={props.prefix}
        placeholder={props.placeholder}
        style={{ color: props?.textColor }}
      />
    </>
  );
};

export default AntDInput;
