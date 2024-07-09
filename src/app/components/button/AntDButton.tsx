"use client";

import React, { ReactNode } from "react";
import { TinyColor } from "@ctrl/tinycolor";
import { Button, ConfigProvider, Space } from "antd";
const colors1 = ["#6253E1", "#04BEFE"];
const colors2 = ["#fc6076", "#ff9a44", "#ef9d43", "#e75516"];
const colors3 = ["#40e495", "#30dd8a", "#2bb673"];

export interface IAntDButton {
  icon?: ReactNode;
  title: string;
  clickEvent: () => void;
  className?: string;
  size?: "large" | "middle" | "small";
}

const AntDButton = (props: IAntDButton) => {
  const getHoverColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
  const getActiveColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: `linear-gradient(135deg, ${colors1.join(", ")})`,
            colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
              colors1
            ).join(", ")})`,
            colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
              colors1
            ).join(", ")})`,
            lineWidth: 0,
          },
        },
      }}
    >
      <Button type="primary" onClick={props.clickEvent} className={props.className} size={props.size}>
      {props.icon} {props.title}
      </Button>
    </ConfigProvider>
  );
};

export default AntDButton;
