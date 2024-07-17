import { ReduxColors, updateColors } from "@/redux/slices/ColorSlice";
import { ColorPicker, ColorPickerProps, Typography } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
const { Title } = Typography;

export interface IColorSelector {
  title: string;
  color: string;
  // setColor: (val: string) => void;
  className?: string;
  colorKey: keyof ReduxColors;
}

const ColorSelector = (props: IColorSelector) => {
  const dispatch = useDispatch();

  const updateColorsOnRedux = (value: ColorPickerProps["value"]) => {
    if (value) {
      const updatedValue: string =
        typeof value === "string" ? value : value?.toHexString();
      // props.setColor(updatedValue);
      console.log("value in compoenet", props.colorKey, updatedValue);
      dispatch(updateColors({ colorKey: props.colorKey, value: updatedValue }));
    }
  };

  return (
    <>
      <Title level={5} className={props.className}>
        {props.title}
      </Title>

      <ColorPicker
        value={props.color}
        onChangeComplete={(color) => {
          updateColorsOnRedux(color);
        }}
        showText
      />
    </>
  );
};

export default ColorSelector;
