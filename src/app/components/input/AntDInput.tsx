"use client";

import { Form, Input } from "antd";
import React from "react";

export interface IAntDInput {
  name: string;
  value: string | number;
  showLabel?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  variant?: "outlined" | "borderless" | "filled" | undefined;
  size?: "small" | "middle" | "large" | undefined;
  prefix?: React.ReactNode;
  placeholder?: string;
}
const AntDInput = (props: IAntDInput) => {
  return (
    <>
      <Input
        name={props.name}
        size={"large"}
        className={`w-full focus:shadow-md ${props.className} ${
          props.variant === "borderless"
            ? "text-gray-500 focus:ring-gray-400/50 focus:ring-1"
            : ""
        }`}
        value={props.value}
        variant={props.variant}
        onChange={props.onChange}
        prefix={props.prefix}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default AntDInput;
