"use client";
import { Col, Row } from "antd";
import React from "react";
import AntDInput from "../input/AntDInput";

export interface IInputTableHeader {
  itemsLabel: string;
  quantityLabel: string;
  rateLabel: string;
  amountLabel: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  tableHeaderColor: string;
  tableHeaderTitleColor: string;
}
const InputTableHeader = (props: IInputTableHeader) => {
  return (
    <>
      <Row
        className={`my-2 py-2 text-white rounded-md w-full`}
        style={{ backgroundColor: props?.tableHeaderColor }}
      >
        <Col span={14}>
          <AntDInput
            name="itemsLabel"
            value={props?.itemsLabel}
            variant="borderless"
            onChange={props.onChange}
            className="my-0.5 text-white focus:ring-0"
            textColor={props.tableHeaderTitleColor}
          />
        </Col>
        <Col span={3}>
          <AntDInput
            name="quantityLabel"
            value={props?.quantityLabel}
            variant="borderless"
            onChange={props.onChange}
            className="my-0.5 text-white focus:ring-0"
            textColor={props.tableHeaderTitleColor}
          />
        </Col>
        <Col span={4}>
          <AntDInput
            name="rateLabel"
            value={props?.rateLabel}
            variant="borderless"
            onChange={props.onChange}
            className="my-0.5 text-white focus:ring-0"
            textColor={props.tableHeaderTitleColor}
          />
        </Col>
        <Col span={3}>
          <AntDInput
            name="amountLabel"
            value={props?.amountLabel}
            variant="borderless"
            onChange={props.onChange}
            className="my-0.5 text-white focus:ring-0"
            textColor={props.tableHeaderTitleColor}
          />
        </Col>
      </Row>
    </>
  );
};

export default InputTableHeader;
