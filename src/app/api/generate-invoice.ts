import { InvoiceBasicData } from "@/app/components/invoice/Invoice";
import { NextApiRequest, NextApiResponse } from "next";
import PDFDocument from "pdfkit";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
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
      currency
    }: InvoiceBasicData = req.body;
    console.log("invoiceData:", req.body);
    const doc = new PDFDocument();
    let buffers: Buffer[] = [];

    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", () => {
      let pdfData = Buffer.concat(buffers);
      res
        .writeHead(200, {
          "Content-Type": "application/pdf",
          "Content-Disposition": "attachment; filename=invoice.pdf",
          "Content-Length": pdfData.length,
        })
        .end(pdfData);
    });

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
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
