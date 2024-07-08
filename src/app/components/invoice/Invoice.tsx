"use client";

import {
  Button,
  Col,
  DatePickerProps,
  Flex,
  Form,
  Grid,
  Input,
  Row,
  UploadFile,
} from "antd";
import React, { useState } from "react";
import UploadImage from "../fileUpload/UploadImage";
import AntDInput from "../input/AntDInput";
import AntDTextArea from "../input/AntDTextArea";
import AntDDatePicker from "../input/AntDDatePicker";
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
  dateLabel: string;
  date: string;
  paymentTermsLabel: string;
  paymentTerms: string;
  dueDateLabel: string;
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
  balanceDueLabel: string;
  balanceDue: string;

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
  dateLabel: "Date",
  date: "",
  paymentTermsLabel: "Payment Terms",
  paymentTerms: "",
  dueDateLabel: "Due Date",
  dueDate: "",
  poNumberLable: "PO Number",
  poNumber: "",

  itemsLabel: "Item",
  quantityLabel: "Quantity",
  rateLabel: "Rate",
  amountLabel: "Amout",
  items: [],

  subTotalLabel: "Sub Total",
  subTotal: "0.00",
  discountLabel: "Discount",
  discount: "",
  taxLabel: "Tax",
  tax: "",
  shippingLabel: "Shipping",
  shipping: "",
  totalLabel: "Total",
  total: "0.00",
  amountPaidLabel: "Amount Paid",
  amountPaid: "0.00",
  balanceDueLabel: "Balance Due",
  balanceDue: "0.00",

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

  const onChangeDate = (name: string, value: any) => {
    if (invoiceData) {
      setInvoiceData({
        ...invoiceData,
        [name]: value,
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
              <div className="w-[60%]">
                <UploadImage fileList={fileList} setFileList={setFileList} />
              </div>
              {/* invoice name and number */}
              <div className="w-[30%]">
                <AntDInput
                  name="invoiceName"
                  value={invoiceData?.invoiceName}
                  variant="borderless"
                  onChange={onChangeInput}
                  className="text-4xl h-10 mb-2"
                />
                <AntDInput
                  name="invoiceNumber"
                  value={invoiceData?.invoiceNumber}
                  variant="outlined"
                  onChange={onChangeInput}
                  prefix={<p style={{ color: "rgba(0,0,0,.25)" }}>#</p>}
                  className="text-right"
                />
              </div>
            </Flex>
            {/*  second row */}
            <Flex
              gap="middle"
              align="start"
              vertical={false}
              justify="space-between"
              className="mt-8"
            >
              <div>
                <AntDTextArea
                  name="owner"
                  value={invoiceData?.owner}
                  variant="outlined"
                  onChange={onChangeTextArea}
                  placeholder="Who is this from?"
                  className="w-[60%]"
                />
                <div className="flex-section mt-3">
                  <div className="mr-4">
                    <AntDInput
                      name="billToLabel"
                      value={invoiceData?.billToLabel}
                      variant="borderless"
                      onChange={onChangeInput}
                      className="mb-2"
                    />
                    <AntDTextArea
                      name="billTo"
                      value={invoiceData?.billTo}
                      variant="outlined"
                      onChange={onChangeTextArea}
                      placeholder="Who is this to?"
                    />
                  </div>
                  <div>
                    <AntDInput
                      name="shipToLabel"
                      value={invoiceData?.shipToLabel}
                      variant="borderless"
                      onChange={onChangeInput}
                      className="mb-2"
                    />
                    <AntDTextArea
                      name="shipTo"
                      value={invoiceData?.shipTo}
                      variant="outlined"
                      onChange={onChangeTextArea}
                      placeholder="(Optional)"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <AntDInput
                    name="dateLabel"
                    value={invoiceData?.dateLabel}
                    variant="borderless"
                    onChange={onChangeInput}
                    className="text-right mr-5"
                  />
                  <AntDDatePicker
                    name="date"
                    value={invoiceData?.date}
                    variant="outlined"
                    onChange={onChangeDate}
                    // className="text-right"
                  />
                </div>
                <div className="flex items-center justify-between mt-5">
                  <AntDInput
                    name="paymentTermsLabel"
                    value={invoiceData?.paymentTermsLabel}
                    variant="borderless"
                    onChange={onChangeInput}
                    className="text-right mr-5"
                  />
                  <AntDInput
                    name="paymentTerms"
                    value={invoiceData?.paymentTerms}
                    variant="outlined"
                    onChange={onChangeInput}
                    // className="text-right"
                  />
                </div>
                <div className="flex items-center justify-between mt-5">
                  <AntDInput
                    name="dueDateLabel"
                    value={invoiceData?.dueDateLabel}
                    variant="borderless"
                    onChange={onChangeInput}
                    className="text-right mr-5"
                  />
                  <AntDDatePicker
                    name="dueDate"
                    value={invoiceData?.dueDate}
                    variant="outlined"
                    onChange={onChangeDate}
                    // className="text-right"
                  />
                </div>
                <div className="flex items-center justify-between mt-5">
                  <AntDInput
                    name="poNumberLable"
                    value={invoiceData?.poNumberLable}
                    variant="borderless"
                    onChange={onChangeInput}
                    className="text-right mr-5"
                  />
                  <AntDInput
                    name="poNumber"
                    value={invoiceData?.poNumber}
                    variant="outlined"
                    onChange={onChangeInput}
                    // className="text-right"
                  />
                </div>
              </div>
            </Flex>
            {/*  items table */}
            {/*  bottom section */}
            <Flex
              gap="middle"
              align="start"
              vertical={false}
              justify="space-between"
              className="mt-8"
            >
              <div className="w-[50%]">
                <div className="mb-5">
                  <AntDInput
                    name="notesLabel"
                    value={invoiceData?.notesLabel}
                    variant="borderless"
                    onChange={onChangeInput}
                    className="mb-2"
                  />
                  <AntDTextArea
                    name="notes"
                    value={invoiceData?.notes}
                    variant="outlined"
                    onChange={onChangeTextArea}
                    placeholder="Notes - any relevent information not already covered?"
                  />
                </div>
                <div>
                  <AntDInput
                    name="termsLabel"
                    value={invoiceData?.termsLabel}
                    variant="borderless"
                    onChange={onChangeInput}
                    className="mb-2"
                  />
                  <AntDTextArea
                    name="terms"
                    value={invoiceData?.terms}
                    variant="outlined"
                    onChange={onChangeTextArea}
                    placeholder="Terms and conditions - late fees, payment methods, delivery schedule"
                  />
                </div>
              </div>
              <div className="w-[40%]">
                <div className="flex-section">
                  <AntDInput
                    name="subTotalLabel"
                    value={invoiceData?.subTotalLabel}
                    variant="borderless"
                    onChange={onChangeInput}
                    className="text-right flex-1"
                  />
                  <p className="amount">
                    ${invoiceData.subTotal.toLowerCase()}
                  </p>
                </div>

                <div className="flex-section">
                  <AntDInput
                    name="totalLabel"
                    value={invoiceData?.totalLabel}
                    variant="borderless"
                    onChange={onChangeInput}
                    className="text-right flex-1"
                  />
                  <p className="amount">${invoiceData.total.toLowerCase()}</p>
                </div>
                <div className="flex-section">
                  <AntDInput
                    name="amountPaidLabel"
                    value={invoiceData?.amountPaidLabel}
                    variant="borderless"
                    onChange={onChangeInput}
                    className="text-right flex-1"
                  />
                  <AntDInput
                    name="amountPaid"
                    value={invoiceData?.amountPaid}
                    variant="outlined"
                    onChange={onChangeInput}
                    prefix={<p style={{ color: "rgba(0,0,0,.25)" }}>$</p>}
                    className="text-right flex-1 !w-[90%]"
                  />
                </div>
                <div className="flex-section">
                  <AntDInput
                    name="balanceDueLabel"
                    value={invoiceData?.balanceDueLabel}
                    variant="borderless"
                    onChange={onChangeInput}
                    className="text-right flex-1"
                  />
                  <p className="amount">
                    ${invoiceData.balanceDue.toLowerCase()}
                  </p>
                </div>
              </div>
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
