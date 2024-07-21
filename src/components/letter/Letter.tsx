"use client";

import {
  onChangeDateFunc,
  onChangeInputFunc,
  onChangeTextAreaFunc,
} from "@/lib/commonFunc";
import { ILetterBasicData, ILetterParagraph } from "@/types/ILetterBasicData";
import {
  DownloadOutlined,
  FileTextOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Col, Form, Row, UploadFile } from "antd";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UploadImage from "../fileUpload/UploadImage";
import AntDDatePicker from "../input/AntDDatePicker";
import AntDInput from "../input/AntDInput";
import AntDTextArea from "../input/AntDTextArea";
import DynamicLetterBody from "./DynamicLetterBody";
import AntDButton from "../button/AntDButton";
import { generateLetterPDF, viewGeneratedLetterPDF } from "@/lib/createLetter";
const defaultLetterData: ILetterBasicData = {
  senderName: "",
  senderAddress: "",
  date: "",
  receiverName: "",
  receiverAddress: "",
  subject: "",
  addressPrefix: "",
  body: [],
};
const defaultItem: ILetterParagraph = {
  id: uuidv4(),
  text: "",
};

const Letter = () => {
  const [letterData, setLetterData] =
    useState<ILetterBasicData>(defaultLetterData);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [paragraphs, setParagraphs] = useState<ILetterParagraph[]>([
    defaultItem,
  ]);
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeInputFunc(e, setLetterData, letterData);
  };
  const onChangeDate = (name: string, value: any) => {
    onChangeDateFunc(name, value, setLetterData, letterData);
  };
  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChangeTextAreaFunc(e, setLetterData, letterData);
  };
  const onFinish = async () => {
    // console.log(fileList[0]);
    // const generatedData: InvoiceBasicData = sampleData;
    const data = generatedData();
    console.log(data, fileList[0]);
    await generateLetterPDF(data, fileList[0] ? fileList[0] : undefined);
  };

  const onFinishView = async () => {
    const data = generatedData();
    console.log(data, fileList[0]);

    await viewGeneratedLetterPDF(data, fileList[0] ? fileList[0] : undefined);
  };
  const generatedData = () => {
    // console.log("Logo", fileList);
    const data: ILetterBasicData = {
      ...letterData,
      body: paragraphs,
    };
    return data;
  };
  const onReset = () => {
    setFileList([]);
    setLetterData(defaultLetterData);
    setParagraphs([defaultItem]);
  };

  return (
    <React.Fragment>
      <Row className="mx-auto max-w-[1600px]">
        <Col span={18}>
          <Form
            variant="filled"
            className="py-8 px-4 mx-auto border border-gray-300 rounded-lg"
          >
            <div className="w-[40%]">
              <AntDInput
                name="senderName"
                value={letterData?.senderName}
                variant="outlined"
                onChange={onChangeInput}
                placeholder="Sender Name"
              />
              <AntDTextArea
                name="senderAddress"
                value={letterData?.senderAddress}
                variant="outlined"
                onChange={onChangeTextArea}
                placeholder="Sender Address"
                className="mt-2"
              />
              <AntDDatePicker
                name="date"
                value={letterData?.date}
                variant="outlined"
                onChange={onChangeDate}
                className="mt-2"
              />

              <AntDInput
                name="receiverName"
                value={letterData?.receiverName}
                variant="outlined"
                onChange={onChangeInput}
                placeholder="Receiver Name"
                className="mt-8"
              />
              <AntDTextArea
                name="receiverAddress"
                value={letterData?.receiverAddress}
                variant="outlined"
                onChange={onChangeTextArea}
                placeholder="Receiver Address"
                className="mt-2"
              />

              <div className="flex items-center mt-6">
                <p>Dear</p>
                <AntDInput
                  name="addressPrefix"
                  value={letterData?.addressPrefix}
                  variant="outlined"
                  onChange={onChangeInput}
                  placeholder="Sir/Madam"
                  className="ml-2"
                />
              </div>
            </div>
            <AntDInput
              name="subject"
              value={letterData?.subject}
              variant="outlined"
              onChange={onChangeInput}
              placeholder="Subject"
              className="mt-8 !w-[80%]"
            />
            {/* allow user to add multiple paragrphs */}
            <DynamicLetterBody
              paragraphs={paragraphs}
              setParagraphs={setParagraphs}
            />
            <div className="mt-6">
              <UploadImage fileList={fileList} setFileList={setFileList} />
              <p>-----(signature)-----</p>
              <p>Sincerely</p>
              <p>{letterData.senderName}</p>
            </div>
          </Form>
        </Col>
        <Col span={3} offset={2} className="w-full">
          <div className="flex items-center mt-4">
            <AntDButton
              icon={<DownloadOutlined />}
              title="Download"
              clickEvent={onFinish}
              className="w-72"
              size="large"
              colorType="infoColors"
            />
            <AntDButton
              icon={<FileTextOutlined />}
              title="View Letter"
              clickEvent={onFinishView}
              className="w-72 ml-4"
              size="large"
              colorType="infoColors"
            />
          </div>
          <AntDButton
            title="Reset Form"
            clickEvent={onReset}
            className="w-36 mt-4"
            size="large"
            colorType="dangerColors"
            icon={<ReloadOutlined />}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Letter;
