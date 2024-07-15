import React, { useState } from "react";
import { Select, Typography } from "antd";

const { Title } = Typography;
const { Option } = Select;

// PageSizes object
export const PageSizes: Record<string, [number, number]> = {
  "4A0": [4767.87, 6740.79] as [number, number],
  "2A0": [3370.39, 4767.87] as [number, number],
  A0: [2383.94, 3370.39] as [number, number],
  A1: [1683.78, 2383.94] as [number, number],
  A2: [1190.55, 1683.78] as [number, number],
  A3: [841.89, 1190.55] as [number, number],
  A4: [595.28, 841.89] as [number, number],
  A5: [419.53, 595.28] as [number, number],
  A6: [297.64, 419.53] as [number, number],
  A7: [209.76, 297.64] as [number, number],
  A8: [147.4, 209.76] as [number, number],
  A9: [104.88, 147.4] as [number, number],
  A10: [73.7, 104.88] as [number, number],
  B0: [2834.65, 4008.19] as [number, number],
  B1: [2004.09, 2834.65] as [number, number],
  B2: [1417.32, 2004.09] as [number, number],
  B3: [1000.63, 1417.32] as [number, number],
  B4: [708.66, 1000.63] as [number, number],
  B5: [498.9, 708.66] as [number, number],
  B6: [354.33, 498.9] as [number, number],
  B7: [249.45, 354.33] as [number, number],
  B8: [175.75, 249.45] as [number, number],
  B9: [124.72, 175.75] as [number, number],
  B10: [87.87, 124.72] as [number, number],
  C0: [2599.37, 3676.54] as [number, number],
  C1: [1836.85, 2599.37] as [number, number],
  C2: [1298.27, 1836.85] as [number, number],
  C3: [918.43, 1298.27] as [number, number],
  C4: [649.13, 918.43] as [number, number],
  C5: [459.21, 649.13] as [number, number],
  C6: [323.15, 459.21] as [number, number],
  C7: [229.61, 323.15] as [number, number],
  C8: [161.57, 229.61] as [number, number],
  C9: [113.39, 161.57] as [number, number],
  C10: [79.37, 113.39] as [number, number],
  RA0: [2437.8, 3458.27] as [number, number],
  RA1: [1729.13, 2437.8] as [number, number],
  RA2: [1218.9, 1729.13] as [number, number],
  RA3: [864.57, 1218.9] as [number, number],
  RA4: [609.45, 864.57] as [number, number],
  SRA0: [2551.18, 3628.35] as [number, number],
  SRA1: [1814.17, 2551.18] as [number, number],
  SRA2: [1275.59, 1814.17] as [number, number],
  SRA3: [907.09, 1275.59] as [number, number],
  SRA4: [637.8, 907.09] as [number, number],
  Executive: [521.86, 756.0] as [number, number],
  Folio: [612.0, 936.0] as [number, number],
  Legal: [612.0, 1008.0] as [number, number],
  Letter: [612.0, 792.0] as [number, number],
  Tabloid: [792.0, 1224.0] as [number, number],
};

const PageSizeSelector: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<[number, number] | any>([
    354.33, 498.9,
  ]);

  const handleChange = (value: string) => {
    setSelectedSize(PageSizes[value]);
  };

  return (
    <>
      <Title level={5} className="mt-4">Select Page Size</Title>
      <Select placeholder="Select a page size" onChange={handleChange} className="w-full">
        {Object.keys(PageSizes).map((key) => (
          <Option key={key} value={key}>
            {key} ({PageSizes[key][0]} x {PageSizes[key][1]})
          </Option>
        ))}
      </Select>
    </>
  );
};

export default PageSizeSelector;
