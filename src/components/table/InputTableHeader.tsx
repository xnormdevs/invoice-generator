'use client'
import { Col, Row } from "antd";
import React from "react";
import AntDInput from "../input/AntDInput";

export interface IInputTableHeader {
  itemsLabel: string;
  quantityLabel: string;
  rateLabel: string;
  amountLabel: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
const InputTableHeader = (props: IInputTableHeader) => {
  return (
    <>
      <Row className="my-2 py-2 bg-[#18274e] text-white rounded-md w-full">
        <Col span={14}>
          <AntDInput
            name="itemsLabel"
            value={props?.itemsLabel}
            variant="borderless"
            onChange={props.onChange}
            className="my-0.5 text-white focus:ring-0"
          />
        </Col>
        <Col span={3}>
          <AntDInput
            name="quantityLabel"
            value={props?.quantityLabel}
            variant="borderless"
            onChange={props.onChange}
            className="my-0.5 text-white focus:ring-0"
          />
        </Col>
        <Col span={4}>
          <AntDInput
            name="rateLabel"
            value={props?.rateLabel}
            variant="borderless"
            onChange={props.onChange}
            className="my-0.5 text-white focus:ring-0"
          />
        </Col>
        <Col span={3}>
          <AntDInput
            name="amountLabel"
            value={props?.amountLabel}
            variant="borderless"
            onChange={props.onChange}
            className="my-0.5 text-white focus:ring-0"
          />
        </Col>
      </Row>

      
    </>
  );
};

export default InputTableHeader;
