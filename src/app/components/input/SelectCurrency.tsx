"use client";
import currencies from "@/app/data/currency";
import { Select, Typography } from "antd";
const { Title } = Typography;

const SelectCurrency = () => {
  return (
    <>
      <Title level={5}>Currency</Title>
      <Select
        showSearch
        className="w-40"
        placeholder="Select a currecny"
        filterOption={(input, option) =>
          (String(option?.label ?? "")).toLowerCase().includes(input.toLowerCase())
        }
      >
        {currencies.map((currency) => (
            <Select.Option value={currency.id} label={currency.id} key={currency.id}>{currency.id + " - " + currency.currency}</Select.Option>
        ))}
      </Select>
    </>
  );
};

export default SelectCurrency;
