import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InvoiceLabels {
  billToLabel: string;
  shipToLabel: string;
  dateLabel: string;
  paymentTermsLabel: string;
  dueDateLabel: string;
  poNumberLabel: string;
  itemsLabel: string;
  quantityLabel: string;
  rateLabel: string;
  amountLabel: string;
  subTotalLabel: string;
  discountLabel: string;
  taxLabel: string;
  shippingLabel: string;
  totalLabel: string;
  amountPaidLabel: string;
  balanceDueLabel: string;
  notesLabel: string;
  termsLabel: string;
}

const initialState: InvoiceLabels = {
  billToLabel: "Bill To",
  shipToLabel: "Ship To",
  dateLabel: "Date",
  paymentTermsLabel: "Payment Terms",
  dueDateLabel: "Due Date",
  poNumberLabel: "PO Number",
  itemsLabel: "Item",
  quantityLabel: "Quantity",
  rateLabel: "Rate",
  amountLabel: "Amount",
  subTotalLabel: "Sub Total",
  discountLabel: "Discount",
  taxLabel: "Tax",
  shippingLabel: "Shipping",
  totalLabel: "Total",
  amountPaidLabel: "Amount Paid",
  balanceDueLabel: "Balance Due",
  notesLabel: "Notes",
  termsLabel: "Terms",
};

const labelSlice = createSlice({
  name: "labels",
  initialState,
  reducers: {
    updateLabels: (state, action) => {
      const data: InvoiceLabels = action.payload;
      Object.keys(data).forEach((key) => {
        state[key as keyof InvoiceLabels] = data[key as keyof InvoiceLabels];
      });
    },
    resetLabels: (state) => {
      Object.keys(initialState).forEach((key) => {
        state[key as keyof InvoiceLabels] =
          initialState[key as keyof InvoiceLabels];
      });
    },
  },
});

export const { updateLabels, resetLabels } = labelSlice.actions;
export default labelSlice.reducer;
