"use client";

import { Form, Input } from "antd";
import React from "react";

export interface IAntDInput {
  name: string;
  value: string | number;
  showLabel: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  variant: "outlined" | "borderless" | "filled" | undefined;
  size?: "small" | "middle" | "large" | undefined;
  prefix?: React.ReactNode;
}
const AntDInput = (props: IAntDInput) => {
  return (
    <>
      <Input
        name={props.name}
        size={props.size}
        className={`w-full ${props.className}`}
        value={props.value}
        variant={props.variant}
        onChange={props.onChange}
        prefix={props.prefix}
      />
    </>
  );
};

export default AntDInput;
