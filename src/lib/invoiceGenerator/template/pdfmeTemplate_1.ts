import { Template, BLANK_PDF } from '@pdfme/common';

const template: Template = {
  basePdf: BLANK_PDF,
  schemas: [
    {
      invoiceName: {
        type: 'text',
        position: { x: 50, y: 750 }, // Adjust based on your PDF layout
        width: 200,
        height: 20,
        fontSize: 20,
        fontWeight: 'bold'
      },
      invoiceNumber: {
        type: 'text',
        position: { x: 50, y: 730 },
        width: 200,
        height: 20,
      },
      owner: {
        type: 'text',
        position: { x: 50, y: 680 },
        width: 200,
        height: 60,
        multiline: true
      },
      billToLabel: {
        type: 'text',
        position: { x: 50, y: 620 },
        width: 100,
        height: 20,
        fontWeight: 'bold'
      },
      billTo: {
        type: 'text',
        position: { x: 50, y: 600 },
        width: 200,
        height: 60,
        multiline: true
      },
      shipToLabel: {
        type: 'text',
        position: { x: 300, y: 620 },
        width: 100,
        height: 20,
        fontWeight: 'bold'
      },
      shipTo: {
        type: 'text',
        position: { x: 300, y: 600 },
        width: 200,
        height: 60,
        multiline: true
      },
      dateLabel: {
        type: 'text',
        position: { x: 350, y: 580 },
        width: 100,
        height: 20,
        fontWeight: 'bold'
      },
      date: {
        type: 'text',
        position: { x: 450, y: 580 },
        width: 100,
        height: 20,
      },
      paymentTermsLabel: {
        type: 'text',
        position: { x: 350, y: 560 },
        width: 100,
        height: 20,
        fontWeight: 'bold'
      },
      paymentTerms: {
        type: 'text',
        position: { x: 450, y: 560 },
        width: 100,
        height: 20,
      },
      dueDateLabel: {
        type: 'text',
        position: { x: 350, y: 540 },
        width: 100,
        height: 20,
        fontWeight: 'bold'
      },
      dueDate: {
        type: 'text',
        position: { x: 450, y: 540 },
        width: 100,
        height: 20,
      },
      poNumberLabel: {
        type: 'text',
        position: { x: 350, y: 520 },
        width: 100,
        height: 20,
        fontWeight: 'bold'
      },
      poNumber: {
        type: 'text',
        position: { x: 450, y: 520 },
        width: 100,
        height: 20,
      },
      itemsLabel: {
        type: 'text',
        position: { x: 50, y: 500 },
        width: 100,
        height: 20,
        fontWeight: 'bold'
      },
      quantityLabel: {
        type: 'text',
        position: { x: 270, y: 500 },
        width: 100,
        height: 20,
        fontWeight: 'bold'
      },
      rateLabel: {
        type: 'text',
        position: { x: 350, y: 500 },
        width: 100,
        height: 20,
        fontWeight: 'bold'
      },
      amountLabel: {
        type: 'text',
        position: { x: 450, y: 500 },
        width: 100,
        height: 20,
        fontWeight: 'bold'
      },
      tableItems: {
        type: 'table',
        position: { x: 50, y: 480 },
        width: 470,
        height: 300,
        columns: [
          { key: 'itemName', width: 220 },
          { key: 'quantity', width: 80 },
          { key: 'rate', width: 80 },
          { key: 'amount', width: 90 }
        ]
      },
      subTotalLabel: {
        type: 'text',
        position: { x: 350, y: 180 },
        width: 100,
        height: 20,
        fontWeight: 'bold'
      },
      subTotal: {
        type: 'text',
        position: { x: 450, y: 180 },
        width: 100,
        height: 20,
      },
      discountLabel: {
        type: 'text',
        position: { x: 350, y: 160 },
        width: 100,
        height: 20,
        fontWeight: 'bold'
      },
      discount: {
        type: 'text',
        position: { x: 450, y: 160 },
        width: 100,
        height: 20,
      },
      taxLabel: {
        type: 'text',
        position: { x: 350, y: 140 },
        width: 100,
        height: 20,
        fontWeight: 'bold'
      },
      tax: {
        type: 'text',
        position: { x: 450, y: 140 },
        width: 100,
        height: 20,
      },
      shippingLabel: {
        type: 'text',
        position: { x: 350, y: 120 },
        width: 100,
        height: 20,
        fontWeight: 'bold'
      },
      shipping: {
        type: 'text',
        position: { x: 450, y: 120 },
        width: 100,
        height: 20,
      },
      totalLabel: {
        type: 'text',
        position: { x: 350, y: 100 },
        width: 100,
        height: 20,
        fontWeight: 'bold'
      },
      total: {
        type: 'text',
        position: { x: 450, y: 100 },
        width: 100,
        height: 20,
      },
      amountPaidLabel: {
        type: 'text',
        position: { x: 350, y: 80 },
        width: 100,
        height: 20,
        fontWeight: 'bold'
      },
      amountPaid: {
        type: 'text',
        position: { x: 450, y: 80 },
        width: 100,
        height: 20,
      },
      balanceDueLabel: {
        type: 'text',
        position: { x: 350, y: 60 },
        width: 100,
        height: 20,
        fontWeight: 'bold'
      },
      balanceDue: {
        type: 'text',
        position: { x: 450, y: 60 },
        width: 100,
        height: 20,
      },
      notesLabel: {
        type: 'text',
        position: { x: 50, y: 20 },
        width: 100,
        height: 20,
        fontWeight: 'bold'
      },
      notes: {
        type: 'text',
        position: { x: 50, y: 0 },
        width: 200,
        height: 40,
        multiline: true
      },
      termsLabel: {
        type: 'text',
        position: { x: 50, y: -40 },
        width: 100,
        height: 20,
        fontWeight: 'bold'
      },
      terms: {
        type: 'text',
        position: { x: 50, y: -60 },
        width: 200,
        height: 40,
        multiline: true
      }
    }
  ]
};
