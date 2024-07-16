import React, { useState } from "react";
import { Select, Typography } from "antd";
import { PageSizes } from "@/app/data/pageSizes";

const { Title } = Typography;
const { Option } = Select;

const PageSizeSelector: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<[number, number] | any>([
    354.33, 498.9,
  ]);

  const handleChange = (value: string) => {
    setSelectedSize(PageSizes[value]);
  };

  return (
    <>
      <Title level={5} className="mt-4">
        Select Page Size
      </Title>
      <Select
        placeholder="Select a page size"
        onChange={handleChange}
        className="w-full"
      >
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
