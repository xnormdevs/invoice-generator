"use client";

import { DatePicker, DatePickerProps, Form, Input } from "antd";
import React from "react";

export interface IAntDDatePicker {
  name: string;
  value: string | number;
  onChange: (name: string, value: any) => void;
  className?: string;
  variant?: "outlined" | "borderless" | "filled" | undefined;
  size?: "small" | "middle" | "large" | undefined;
  placeholder?: string;
}
const AntDDatePicker = (props: IAntDDatePicker) => {
  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    props.onChange(props.name, dateString);
  };
  return (
    <>
      <DatePicker
        onChange={onChangeDate}
        name={props.name}
        className={`w-full ${props.className}`}
        variant={props.variant}
        size="middle"
      />
    </>
  );
};

export default AntDDatePicker;
