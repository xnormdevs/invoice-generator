"use client";

import TextArea from "antd/es/input/TextArea";
import React from "react";

export interface IAntDTextArea {
  name: string;
  value: string | number;
  showLabel?: boolean;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  className?: string;
  variant: "outlined" | "borderless" | "filled" | undefined;
  placeholder?: string;
}
const AntDTextArea = (props: IAntDTextArea) => {
  return (
    <>
      <TextArea
        name={props.name}
        className={`w-full ${props.className}`}
        value={props.value}
        variant={props.variant}
        onChange={props.onChange}
        autoSize={{ minRows: 3, maxRows: 6 }}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default AntDTextArea;
