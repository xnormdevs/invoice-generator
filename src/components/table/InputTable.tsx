'use client'
import React from "react";
import { Item } from "../invoice/Invoice";
import InputTableHeader from "./InputTableHeader";
import ItemsInputForm from "./ItemsInputForm";
import { ICurrency } from "@/app/data/currency";

export interface IInputTable {
  items: Item[];
  setItems: (items: Item[]) => void;
  itemsLabel: string;
  quantityLabel: string;
  rateLabel: string;
  amountLabel: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  currency: ICurrency;
}

const InputTable = (props: IInputTable) => {
  return (
    <div className="my-3">
      <InputTableHeader
        itemsLabel={props.itemsLabel}
        quantityLabel={props.quantityLabel}
        rateLabel={props.rateLabel}
        amountLabel={props.amountLabel}
        onChange={props.onChange}
      />
      <ItemsInputForm items={props.items} setItems={props.setItems} currency={props.currency} />
    </div>
  );
};

export default InputTable;
