"use client";
import { ILetterParagraph } from "@/types/ILetterBasicData";
import { Button, Col, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

export interface IDynamicLetterBody {
  paragraphs: ILetterParagraph[];
  setParagraphs: (data: ILetterParagraph[]) => void;
}
const defaultItem: ILetterParagraph = {
  id: uuidv4(),
  text: "",
};
const DynamicLetterBody = (props: IDynamicLetterBody) => {
  const addParagraph = () => {
    const newItem: ILetterParagraph = { ...defaultItem, id: uuidv4() };
    props.setParagraphs([...props.paragraphs, newItem]);
  };

  const removeParagraph = (id: string) => {
    props.setParagraphs(props.paragraphs.filter((item) => item.id !== id));
  };

  const handleChange = (id: string, value: string) => {
    const updatedItems = props.paragraphs.map((item) => {
      if (item.id === id) {
        return { ...item, text: value };
      }
      return item;
    });
    props.setParagraphs(updatedItems);
  };
  const removeAllParagraphs = () => {
    props.setParagraphs([defaultItem]);
  };

  return (
    <div className="mt-6">
      {props.paragraphs.map((item) => (
        <Row key={item.id} className="my-1">
          <Col span={22}>
            <TextArea
              value={item.text}
              placeholder="Add letter body"
              variant="outlined"
              rows={4}
              onChange={(e) => handleChange(item.id, e.target.value)}
            />
          </Col>
          <Col span={2}>
            {props.paragraphs.length > 1 && (
              <DeleteOutlined
                className="ml-2 text-lg cursor-pointer text-red-400"
                onClick={() => removeParagraph(item.id)}
              />
            )}
          </Col>
        </Row>
      ))}
       <div className="flex items-center mt-4">
        <Button type="dashed" onClick={addParagraph} icon={<PlusOutlined />}>
          Add New Paragraoh
        </Button>
        <Button danger onClick={removeAllParagraphs} className="ml-4">
          Remove All
        </Button>
      </div>
    </div>
  );
};

export default DynamicLetterBody;
