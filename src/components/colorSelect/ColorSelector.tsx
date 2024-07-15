import { ColorPicker, ColorPickerProps, Typography } from "antd";
import { useEffect, useState } from "react";
const { Title } = Typography;

export interface IColorSelector {
  title: string;
  color: string;
  setColor: (val: string) => void;
}

const ColorSelector = (props: IColorSelector) => {
  const [value, setValue] = useState<ColorPickerProps["value"]>(props.color);
//   console.log(typeof value === "string" ? value : value?.toHexString());

  useEffect(() => {
    if (value)
      props.setColor(typeof value === "string" ? value : value?.toHexString());
  }, [value]);
  return (
    <>
      <Title level={5}>{props.title}</Title>

      <ColorPicker
        value={value}
        onChangeComplete={(color) => {
          setValue(color);
        }}
        showText
      />
    </>
  );
};

export default ColorSelector;
