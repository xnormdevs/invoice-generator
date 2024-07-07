"use client";

import { Button, Col, Flex, Form, Grid, Input, Row, UploadFile } from "antd";
import React, { useState } from "react";
import UploadImage from "../fileUpload/UploadImage";
import AntDInput from "../input/AntDInput";
interface Item {
  id: number;
  description: string;
  quantity: number;
  rate: number;
}

interface InvoiceBasicDate {
  invoiceName: string;
  invoiceNumber: string;
  invoiceDate: string;
  owner: string;
  billToLabel: string;
  billTo: string;
  shipToLabel: string;
  shipTo: string;
  dateLable: string;
  date: string;
  paymentTermsLabel: string;
  paymentTerms: string;
  dueDateLable: string;
  dueDate: string;
  poNumberLable: string;
  poNumber: string;

  itemsLabel: string;
  quantityLabel: string;
  rateLabel: string;
  amountLabel: string;
  items: Item[];

  subTotalLabel: string;
  subTotal: string;
  discountLabel: string;
  discount: string;
  taxLabel: string;
  tax: string;
  shippingLabel: string;
  shipping: string;
  totalLabel: string;
  total: string;
  amountPaidLabel: string;
  amountPaid: string;
  amountDueLabel: string;
  amountDue: string;

  notesLabel: string;
  notes: string;
  termsLabel: string;
  terms: string;
}

const defaultInvoiceData: InvoiceBasicDate = {
  invoiceName: "INVOICE",
  invoiceNumber: "",
  invoiceDate: "",
  owner: "",
  billToLabel: "Bill To",
  billTo: "",
  shipToLabel: "Ship To",
  shipTo: "",
  dateLable: "Data",
  date: "",
  paymentTermsLabel: "Payment Terms",
  paymentTerms: "",
  dueDateLable: "Due Date",
  dueDate: "",
  poNumberLable: "PO Number",
  poNumber: "",

  itemsLabel: "Item",
  quantityLabel: "Quantity",
  rateLabel: "Rate",
  amountLabel: "Amout",
  items: [],

  subTotalLabel: "Sub Total",
  subTotal: "",
  discountLabel: "Discount",
  discount: "",
  taxLabel: "Tax",
  tax: "",
  shippingLabel: "Shipping",
  shipping: "",
  totalLabel: "Total",
  total: "",
  amountPaidLabel: "Amount Paid",
  amountPaid: "",
  amountDueLabel: "Amout Due",
  amountDue: "",

  notesLabel: "Notes",
  notes: "",
  termsLabel: "Terms",
  terms: "",
};

const Invoice: React.FC = () => {
  const [invoiceData, setInvoiceData] =
    useState<InvoiceBasicDate>(defaultInvoiceData);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [items, setItems] = useState<Item[]>([
    { id: 1, description: "", quantity: 1, rate: 0 },
  ]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (invoiceData) {
      setInvoiceData({
        ...invoiceData,
        [e.target.name]: e.target.value,
      });
    }
  };


  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (invoiceData) {
      setInvoiceData({
        ...invoiceData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const onFinish = () => {
    console.log("invoiceData:", invoiceData);
    console.log("Logo", fileList);
  };
  const onReset = () => {
    setFileList([]);
    setInvoiceData(defaultInvoiceData);
  };
  return (
    <React.Fragment>
      <Row className="mx-auto max-w-[1600px]">
        <Col span={18}>
          <Form
            variant="filled"
            className="py-8 px-4 mx-auto border border-gray-300 rounded-lg"
          >
            {/*  first row */}
            <Flex
              gap="middle"
              align="start"
              vertical={false}
              justify="space-between"
              className="mb-4"
            >
              {/*  file upload */}
              <UploadImage fileList={fileList} setFileList={setFileList} />
              {/* invoice name and number */}
              <div className="w-[40%]">
                <AntDInput
                  name="invoiceName"
                  value={invoiceData?.invoiceName}
                  variant="borderless"
                  showLabel={false}
                  size="large"
                  onChange={onChangeInput}
                  className="text-4xl h-10 mb-2"
                />
                <AntDInput
                  name="invoiceNumber"
                  value={invoiceData?.invoiceNumber}
                  variant="outlined"
                  showLabel={false}
                  size="large"
                  onChange={onChangeInput}
                  prefix={<p style={{ color: "rgba(0,0,0,.25)" }}>#</p>}
                  className="text-right"
                />
              </div>
            </Flex>

            {/* second row  */}
            <Flex
              gap="middle"
              align="start"
              vertical={false}
              justify="space-between"
            >
              <AntDInput
                name="owner"
                value={invoiceData?.owner}
                variant="outlined"
                showLabel={false}
                size="large"
                onChange={onChangeTextArea}
              />
            </Flex>
            {/*  reset button */}
            <Button htmlType="button" onClick={onReset} className="mt-6">
              Reset
            </Button>
          </Form>
        </Col>
        <Col span={6}>
          <Button type="primary" onClick={onFinish}>
            primary
          </Button>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Invoice;
