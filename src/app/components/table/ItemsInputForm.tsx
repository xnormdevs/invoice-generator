import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";
import { v4 as uuidv4 } from "uuid";
import { Item } from "../invoice/Invoice";
import { ICurrency } from "@/app/data/currency";

export interface IItemsInputForm {
  items: Item[];
  setItems: (items: Item[]) => void;
  currency: ICurrency;
}

const ItemsInputForm = (props: IItemsInputForm) => {
  const addItem = () => {
    const newItem: Item = {
      id: uuidv4(),
      itemName: "",
      quantity: 1,
      rate: 0,
    };
    props.setItems([...props.items, newItem]);
  };

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
    props.setItems([{ id: uuidv4(), itemName: "", quantity: 0, rate: 1 }]);
  };
  return (
    <>
      {props.items.map((item) => (
        <Row key={item.id} gutter={16} className="my-1">
          <Col span={14}>
            <Input
              placeholder="Description of item/service..."
              value={item.itemName}
              onChange={(e) =>
                handleChange(item.id, "itemName", e.target.value)
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
                <MinusCircleOutlined
                  style={{ marginLeft: "10px", color: "red" }}
                  onClick={() => removeItem(item.id)}
                />
              )}
            </div>
          </Col>
        </Row>
      ))}
      <div className="flex items-center mt-4">
        <Button type="dashed" onClick={addItem} icon={<PlusOutlined />}>
          Add Line Item
        </Button>
        <Button danger onClick={removeAllItems} className="ml-4">
          Reset Items
        </Button>
      </div>
    </>
  );
};

export default ItemsInputForm;
