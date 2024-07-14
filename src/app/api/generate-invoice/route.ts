import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";
import { InvoiceBasicData } from "@/app/components/invoice/Invoice";
import { NextApiResponse } from "next";
export async function POST(req: Request, res: NextApiResponse) {
  const {
    invoiceName,
    invoiceNumber,
    invoiceDate,
    owner,
    billToLabel,
    billTo,
    shipToLabel,
    shipTo,
    dateLabel,
    date,
    paymentTermsLabel,
    paymentTerms,
    dueDateLabel,
    dueDate,
    poNumberLabel,
    poNumber,
    itemsLabel,
    quantityLabel,
    rateLabel,
    amountLabel,
    items,
    subTotalLabel,
    subTotal,
    discountLabel,
    discount,
    taxLabel,
    tax,
    shippingLabel,
    shipping,
    totalLabel,
    total,
    amountPaidLabel,
    amountPaid,
    balanceDueLabel,
    balanceDue,
    notesLabel,
    notes,
    termsLabel,
    terms,
    currency,
  }: InvoiceBasicData = await req.json();
  const data: InvoiceBasicData = {
    invoiceName,
    invoiceNumber,
    invoiceDate,
    owner,
    billToLabel,
    billTo,
    shipToLabel,
    shipTo,
    dateLabel,
    date,
    paymentTermsLabel,
    paymentTerms,
    dueDateLabel,
    dueDate,
    poNumberLabel,
    poNumber,
    itemsLabel,
    quantityLabel,
    rateLabel,
    amountLabel,
    items,
    subTotalLabel,
    subTotal,
    discountLabel,
    discount,
    taxLabel,
    tax,
    shippingLabel,
    shipping,
    totalLabel,
    total,
    amountPaidLabel,
    amountPaid,
    balanceDueLabel,
    balanceDue,
    notesLabel,
    notes,
    termsLabel,
    terms,
    currency,
  };
  // console.log(data);
  const doc = new PDFDocument();
  const fontPath = path.join(process.cwd(), "fonts", "helvetica.ttf");
  if (fs.existsSync(fontPath)) {
    doc.font(fontPath);
    console.log(fontPath);
  } else {
    console.error("Font file not found");
  }
  let buffers: Buffer[] = [];

  doc.on("data", buffers.push.bind(buffers));

  console.log(process.cwd());
  // Header
  doc.fontSize(20).text(invoiceName, { align: "center" });
  doc.moveDown();

  // Invoice Info
  doc.fontSize(12).text(`Invoice Number: ${invoiceNumber}`);
  doc.text(`Invoice Date: ${invoiceDate}`);
  doc.text(`Owner: ${owner}`);
  doc.moveDown();

  // Bill To / Ship To
  doc.text(`${billToLabel}: ${billTo}`);
  doc.text(`${shipToLabel}: ${shipTo}`);
  doc.moveDown();

  // Dates
  doc.text(`${dateLabel}: ${date}`);
  doc.text(`${paymentTermsLabel}: ${paymentTerms}`);
  doc.text(`${dueDateLabel}: ${dueDate}`);
  doc.text(`${poNumberLabel}: ${poNumber}`);
  doc.moveDown();

  // Items Table Header
  doc.text(`${itemsLabel}`);
  doc.text(`${quantityLabel}`);
  doc.text(`${rateLabel}`);
  doc.text(`${amountLabel}`);
  doc.moveDown();

  // Items
  items.forEach((item) => {
    doc.text(`${item.itemName}`);
    doc.text(`${item.quantity}`);
    doc.text(`${currency?.currency} ${item.rate}`);
    doc.text(`${currency?.currency} ${item.quantity * item.rate}`);
    doc.moveDown();
  });

  // Totals
  doc.text(`${subTotalLabel}: ${currency?.currency} ${subTotal}`);
  doc.text(`${discountLabel}:${currency?.currency} ${discount}`);
  doc.text(`${taxLabel}:${currency?.currency} ${tax}`);
  doc.text(`${shippingLabel}:${currency?.currency} ${shipping}`);
  doc.text(`${totalLabel}:${currency?.currency} ${total}`);
  doc.text(`${amountPaidLabel}:${currency?.currency} ${amountPaid}`);
  doc.text(`${balanceDueLabel}:${currency?.currency} ${balanceDue}`);
  doc.moveDown();

  // Notes
  doc.text(`${notesLabel}: ${notes}`);
  doc.moveDown();

  // Terms
  doc.text(`${termsLabel}: ${terms}`);
  doc.end();
  // doc.on("end", () => {
  //   pdfData = Buffer.concat(buffers);
  // });

  // return new NextResponse(pdfData, {
  //   headers: {
  //     "Content-Type": "application/pdf",
  //     "Content-Disposition": "attachment; filename=invoice.pdf",
  //     "Content-Length": pdfData.length.toString(),
  //   },
  // });

  const pdfBuffer = await new Promise<Buffer>((resolve, reject) => {
    const buffers: Buffer[] = [];
    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
      resolve(Buffer.concat(buffers));
    });
    doc.on('error', reject);
  });

  return new NextResponse(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename=invoice_${invoiceNumber}.pdf`,
      'Content-Length': pdfBuffer.length.toString(),
    },
  });
}

async function getPdfData(data: InvoiceBasicData) {
  console.log(data);
  // Replace this with your actual logic to generate or fetch PDF data
  const doc = new PDFDocument();
  let buffers: Buffer[] = [];
  doc.on("data", buffers.push.bind(buffers));
  return doc;
}
