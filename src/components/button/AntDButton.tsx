"use client";

import React, { ReactNode, useEffect } from "react";
import { TinyColor } from "@ctrl/tinycolor";
import { Button, ConfigProvider, Space } from "antd";
const infoColors = ["#6253E1", "#04BEFE"];
const dangerColors = ["#ff8484", "#fe0404"];
const successColors = ["#077912", "#8fff84", "#077912"];
export interface IAntDButton {
  icon?: ReactNode;
  title: string;
  clickEvent: () => void;
  className?: string;
  size?: "large" | "middle" | "small";
  variant?: "outlined" | "borderless" | "filled" | undefined;
  colorType: "infoColors" | "dangerColors" | "successColors";
}

const AntDButton = (props: IAntDButton) => {
  const [color, setColor] = React.useState<string[]>([]);
  const getHoverColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
  const getActiveColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());

  useEffect(() => {
    setColor(
      props.colorType === "infoColors"
        ? infoColors
        : props.colorType === "dangerColors"
        ? dangerColors
        : successColors
    );
  }, [props.colorType]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: `linear-gradient(135deg, ${color.join(", ")})`,
            colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
              color
            ).join(", ")})`,
            colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
              color
            ).join(", ")})`,
            lineWidth: 0,
          },
        },
      }}
    >
      <Button
        type="primary"
        onClick={props.clickEvent}
        className={props.className}
        size={props.size}
      >
        {props.icon} {props.title}
      </Button>
    </ConfigProvider>
  );
};

export default AntDButton;
