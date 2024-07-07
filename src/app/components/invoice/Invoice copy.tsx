"use client";

import React, { useState } from "react";

interface Item {
  description: string;
  quantity: number;
  rate: number;
}

const Invoice: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { description: "", quantity: 1, rate: 0 },
  ]);
  const [tax, setTax] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [shipping, setShipping] = useState<number>(0);
  const [notes, setNotes] = useState<string>("");
  const [terms, setTerms] = useState<string>("");
  const [currency, setCurrency] = useState<string>("USD ($)");

  const handleAddItem = () => {
    setItems([...items, { description: "", quantity: 1, rate: 0 }]);
  };

  const handleItemChange = (
    index: number,
    key: keyof Item,
    value: string | number
  ) => {
    const newItems: any = [...items];
    newItems[index][key] = value;
    setItems(newItems);
  };

  const subtotal = items.reduce(
    (total, item) => total + item.quantity * item.rate,
    0
  );
  const total = subtotal + (subtotal * tax) / 100 - discount + shipping;

  return (
    <div className="max-w-4xl mx-auto p-8 border border-gray-300 rounded-lg bg-white">
      <div className="flex justify-between items-center mb-8">
        <div className="w-40 h-24 bg-gray-200 flex items-center justify-center text-gray-500">
          + Add Your Logo
        </div>
        <div className="text-right">
          <label className="block text-2xl font-bold">INVOICE</label>
          <input
            type="text"
            value="1"
            readOnly
            className="w-16 text-center border-b border-gray-300"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <label className="block font-bold mb-1">Who is this from?</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-bold mb-1">Bill To</label>
          <input
            type="text"
            placeholder="Who is this to?"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-bold mb-1">Ship To</label>
          <input
            type="text"
            placeholder="(optional)"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-bold mb-1">Date</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-bold mb-1">Payment Terms</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-bold mb-1">Due Date</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-bold mb-1">PO Number</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="mb-8">
        <div className="grid grid-cols-4 gap-4 font-bold">
          <label>Item</label>
          <label>Quantity</label>
          <label>Rate</label>
          <label>Amount</label>
        </div>
        {items.map((item, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 items-center mt-2">
            <input
              type="text"
              placeholder="Description of item/service..."
              value={item.description}
              onChange={(e) =>
                handleItemChange(index, "description", e.target.value)
              }
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                handleItemChange(index, "quantity", Number(e.target.value))
              }
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="number"
              value={item.rate}
              onChange={(e) =>
                handleItemChange(index, "rate", Number(e.target.value))
              }
              className="p-2 border border-gray-300 rounded"
            />
            <div>{(item.quantity * item.rate).toFixed(2)}</div>
          </div>
        ))}
        <button
          onClick={handleAddItem}
          className="mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          + Line Item
        </button>
      </div>
      <div className="mb-8">
        <label className="block font-bold mb-1">Notes</label>
        <textarea
          placeholder="Notes - any relevant information not already covered"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <div className="mb-8">
        <label className="block font-bold mb-1">Terms</label>
        <textarea
          placeholder="Terms and conditions - late fees, payment methods, delivery schedule"
          value={terms}
          onChange={(e) => setTerms(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <div className="mb-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-right font-bold">Subtotal</div>
          <div>{subtotal.toFixed(2)}</div>
          <div className="text-right font-bold">Tax</div>
          <input
            type="number"
            value={tax}
            onChange={(e) => setTax(Number(e.target.value))}
            className="p-2 border border-gray-300 rounded"
          />
          <div className="text-right font-bold">Discount</div>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(Number(e.target.value))}
            className="p-2 border border-gray-300 rounded"
          />
          <div className="text-right font-bold">Shipping</div>
          <input
            type="number"
            value={shipping}
            onChange={(e) => setShipping(Number(e.target.value))}
            className="p-2 border border-gray-300 rounded"
          />
          <div className="text-right font-bold">Total</div>
          <div>{total.toFixed(2)}</div>
          <div className="text-right font-bold">Amount Paid</div>
          <input type="number" className="p-2 border border-gray-300 rounded" />
          <div className="text-right font-bold">Balance Due</div>
          {/* <div>{(total - (Number(document.querySelector('input[type="number"]')?.value) || 0)).toFixed(2)}</div> */}
        </div>
      </div>
      <div className="mb-8">
        <label className="block font-bold mb-1">Currency</label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="USD ($)">USD ($)</option>
          {/* Add more currencies as needed */}
        </select>
      </div>
      <button className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">
        Download
      </button>
    </div>
  );
};

export default Invoice;
