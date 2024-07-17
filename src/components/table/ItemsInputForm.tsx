"use client";
import { useMessage } from "@/hooks/useMessage";
import {
  deleteItems,
  insertItems,
  ReduxItems,
} from "@/redux/slices/ItemsSlice";
import { ICurrency, Item } from "@/types/IInvoiceBasicData";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Divider,
  Input,
  InputRef,
  List,
  Row,
  Select,
  Space,
} from "antd";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.items);
  const { showMessage } = useMessage();
  const [name, setName] = useState<string | undefined>(undefined);
  const inputRef = useRef<InputRef>(null);
  const selectRef = useRef<any>(null);
  // console.log(items);

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
    props.setItems(updatedItems);
  };

  const removeAllItems = () => {
    props.setItems([defaultItem]);
  };

  const onNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    setName(event.target.value);
    handleChange(id, "itemName", event.target.value);
  };

  const addItems = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    if (name) {
      e.preventDefault();
      dispatch(insertItems(name));
      // setItems([...items, name || `New item ${index++}`]);
      setName(undefined);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    } else {
      showMessage({ type: "error", content: "Item name is required" });
    }
  };

  const deleteFromRedux = (id: string) => {
    // console.log("delete item", id);
    dispatch(deleteItems(id));
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
              ref={selectRef}
              style={{ width: "100%" }}
              placeholder="Description of item/service..."
              value={item.itemName}
              dropdownRender={(menu) => (
                <>
                  {/* {menu} */}
                  <List
                    dataSource={items}
                    renderItem={(reduxItem: ReduxItems) => (
                      <List.Item
                        className="cursor-pointer mx-10"
                        key={reduxItem.id}
                        onClick={() => {
                          handleChange(item.id, "itemName", reduxItem.name);
                          selectRef?.current?.blur();
                        }}
                        actions={[
                          <DeleteOutlined
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent triggering List.Item onClick
                              deleteFromRedux(reduxItem.id);
                            }}
                            key={item.id}
                          />,
                        ]}
                      >
                        {reduxItem.name}
                      </List.Item>
                    )}
                  />
                  <Divider style={{ margin: "8px 0" }} />
                  <Space style={{ padding: "0 8px 4px", width: "100%" }}>
                    <Input
                      placeholder="Enter new item/service..."
                      className="w-full"
                      ref={inputRef}
                      value={name}
                      onChange={(e) => onNameChange(e, item.id)}
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
              options={items?.map((item: ReduxItems) => ({
                label: item.name,
                value: item.name,
              }))}
              filterSort={(optionA: any, optionB: any) =>
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
                handleChange(item.id, "quantity", parseFloat(e.target.value) || 0)
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
