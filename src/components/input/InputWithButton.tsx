"use client";
import { Space, Button, Input } from "antd";
import { SwapOutlined } from "@ant-design/icons";
import React, { useState } from "react";
export interface IInputWithButton {
  name: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  prefix?: React.ReactNode;
  placeholder?: string;
  type?: "string" | "number";
  isPercentage: boolean;
  setIsPercentage: (val: boolean) => void;
}
const InputWithButton = (props: IInputWithButton) => {
  //   const [isPercentage, setIsPercentage] = useState(false);
  return (
    <Space.Compact className="w-[50%] mr-4">
      <Input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={`focus:shadow-md`}
        size={"middle"}
        variant="outlined"
        prefix={
          !props.isPercentage && <p style={{ color: "rgba(0,0,0,.25)" }}>$</p>
        }
        suffix={
          props.isPercentage && <p style={{ color: "rgba(0,0,0,.25)" }}>%</p>
        }
      />
      <Button onClick={() => props.setIsPercentage(!props.isPercentage)}>
        <SwapOutlined />
      </Button>
    </Space.Compact>
  );
};

export default InputWithButton;
