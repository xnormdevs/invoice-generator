export interface Item {
  id: string;
  itemName: string;
  quantity: number;
  rate: number;
}

export interface ICurrency {
  id: string;
  currency: string;
}

export interface InvoiceBasicData {
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
  poNumberLabel: string;
  poNumber: string;

  itemsLabel: string;
  quantityLabel: string;
  rateLabel: string;
  amountLabel: string;
  items: Item[];

  subTotalLabel: string;
  subTotal: number;
  discountLabel: string;
  discount: number;
  taxLabel: string;
  tax: number;
  shippingLabel: string;
  shipping: number;
  totalLabel: string;
  total: number;
  amountPaidLabel: string;
  amountPaid: number;
  balanceDueLabel: string;
  balanceDue: number;

  notesLabel: string;
  notes: string;
  termsLabel: string;
  terms: string;
  currency: ICurrency | undefined;
  tableHeaderColor: string;
  titleColor: string;
  labelColor: string;
  tableHeaderTitleColor: string;
}
