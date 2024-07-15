"use client";
import currencies, { ICurrency } from "@/app/data/currency";
import { Select, Typography } from "antd";
const { Title } = Typography;

export interface ISelectCurrency {
  currency: ICurrency;
  setCurrency: (val: ICurrency) => void;
}

const SelectCurrency = (props: ISelectCurrency) => {
  const handleCurrencyChange = (value: string) => {
  if (value && currencies) {
    const selectedCurrency: ICurrency | undefined = currencies.find(
      (curr) => curr.id === value
    );
    if (selectedCurrency) {
      props.setCurrency(selectedCurrency);
    }
  }
};
  return (
    <>
      <Title level={5} className="mt-4">Currency</Title>
      <Select
        showSearch
        className="w-full"
        placeholder="Select a currecny"
        filterOption={(input, option) =>
          String(option?.label ?? "")
            .toLowerCase()
            .includes(input.toLowerCase())
        }
        onChange={handleCurrencyChange}
        value={props.currency.id}
      >
        {currencies.map((currency) => (
          <Select.Option
            value={currency.id}
            label={currency.id}
            key={currency.id}
          >
            {currency.id + " - " + currency.currency}
          </Select.Option>
        ))}
      </Select>
    </>
  );
};

export default SelectCurrency;
