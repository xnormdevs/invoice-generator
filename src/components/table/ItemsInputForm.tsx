"use client";
import { ICurrency, Item } from "@/types/IInvoiceBasicData";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Divider,
  Input,
  InputRef,
  Row,
  Select,
  Space,
} from "antd";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface IItemsInputForm {
  items: Item[];
  setItems: (items: Item[]) => void;
  currency: ICurrency;
}

const defaultItem: Item = {
  id: uuidv4(),
  itemName: "",
  quantity: 1,
  rate: 0,
};

const ItemsInputForm = (props: IItemsInputForm) => {
  const addItem = () => {
    const newItem: Item = { ...defaultItem, id: uuidv4() };
    props.setItems([...props.items, newItem]);
  };
  // console.log(props.items);
  const removeItem = (id: string) => {
    props.setItems(props.items.filter((item) => item.id !== id));
  };

  const handleChange = (
    id: string,
    field: keyof Item,
    value: string | number
  ) => {
    const updatedItems = props.items.map((item) => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    if (field === "itemName") {
      // updateReduxItems(value.toString());
    }
    props.setItems(updatedItems);
  };

  const removeAllItems = () => {
    props.setItems([defaultItem]);
  };

  const [items, setItems] = useState(["jack", "lucy"]);
  const [name, setName] = useState("");
  const inputRef = useRef<InputRef>(null);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  let index = 0;
  const addItems = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  return (
    <>
      {props.items.map((item) => (
        <Row key={item.id} gutter={16} className="my-1">
          <Col span={14}>
            {/* <Input
              placeholder="Description of item/service..."
              value={item.itemName}
              onChange={(e) =>
                handleChange(item.id, "itemName", e.target.value)
              }
            /> */}
            <Select
              showSearch
              style={{ width: '100%' }}
              placeholder="Description of item/service..."
              dropdownRender={(menu) => (
                <>
                  {menu}
                  <Divider style={{ margin: "8px 0" }} />
                  <Space style={{ padding: "0 8px 4px", width: "100%" }}>
                    <Input
                      placeholder="Enter new item/service..."
                      className="w-full"
                      ref={inputRef}
                      value={name}
                      onChange={onNameChange}
                      onKeyDown={(e) => e.stopPropagation()}
                    />
                    <Button
                      type="text"
                      icon={<PlusOutlined />}
                      onClick={addItems}
                    >
                      Add item
                    </Button>
                  </Space>
                </>
              )}
              options={items.map((item) => ({ label: item, value: item }))}
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
            />
          </Col>
          <Col span={3}>
            <Input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                handleChange(item.id, "quantity", parseInt(e.target.value) || 0)
              }
            />
          </Col>
          <Col span={4}>
            <Input
              type="number"
              value={item.rate}
              onChange={(e) =>
                handleChange(item.id, "rate", parseFloat(e.target.value) || 0)
              }
              prefix={
                <p style={{ color: "rgba(0,0,0,.25)" }}>
                  {props.currency.currency}
                </p>
              }
            />
          </Col>
          <Col span={3}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span>${(item.quantity * item.rate).toFixed(2)}</span>
              {props.items.length > 1 && (
                <DeleteOutlined
                  className="ml-6 text-lg cursor-pointer text-red-400"
                  onClick={() => removeItem(item.id)}
                />
              )}
            </div>
          </Col>
        </Row>
      ))}
      <div className="flex items-center mt-4">
        <Button type="dashed" onClick={addItem} icon={<PlusOutlined />}>
          Add New Item
        </Button>
        <Button danger onClick={removeAllItems} className="ml-4">
          Reset Items
        </Button>
      </div>
    </>
  );
};

export default ItemsInputForm;
