import { InvoiceBasicData } from "@/components/invoice/Invoice";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

async function createInvoice(jsonData: InvoiceBasicData) {
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const timesRomanBoldFont = await pdfDoc.embedFont(
    StandardFonts.TimesRomanBold
  );

  const page = pdfDoc.addPage([600, 800]);
  const { width, height } = page.getSize();
  const fontSize = 12;

  const drawText = (text: any, x: any, y: any, options = {}) => {
    page.drawText(text, {
      x,
      y,
      font: timesRomanFont,
      size: fontSize,
      color: rgb(0, 0, 0),
      ...options,
    });
  };

  const drawBoldText = (text: any, x: any, y: any, options = {}) => {
    page.drawText(text, {
      x,
      y,
      font: timesRomanBoldFont,
      size: fontSize,
      color: rgb(0, 0, 0),
      ...options,
    });
  };

  // Invoice Header
  drawBoldText(jsonData.invoiceName, 450, height - 50, { size: 20 });
  drawText(`#${jsonData.invoiceNumber}`, 450, height - 70);

  // Company Details
  let owneryPosition = height - 100
//   drawText(jsonData.owner, 50, height - 50);
  jsonData.owner.split(",").forEach((line) => {
    line = line.trim();
    drawText(line, 50, owneryPosition);
    owneryPosition -= 20;
  });
  drawBoldText(jsonData.billToLabel, 50, height - 180);
  let billToyPosition = height - 200;
  jsonData.billTo.split(",").forEach((line) => {
    line = line.trim();
    drawText(line, 50, billToyPosition);
    billToyPosition -= 20;
  });
  drawBoldText(jsonData.shipToLabel, 250, height - 180);
  let shipToyPosition = height - 200;
  jsonData.shipTo.split(",").forEach((line) => {
    line = line.trim();
    drawText(line, 250, shipToyPosition);
    shipToyPosition -= 20;
  });

  // Invoice Details
  drawText(jsonData.dateLabel, 350, height - 100);
  drawText(jsonData.date, 450, height - 100);
  drawText(jsonData.paymentTermsLabel, 350, height - 120);
  drawText(jsonData.paymentTerms, 450, height - 120);
  drawText(jsonData.dueDateLabel, 350, height - 140);
  drawText(jsonData.dueDate, 450, height - 140);
  drawText(jsonData.poNumberLabel, 350, height - 160);
  drawText(jsonData.poNumber, 450, height - 160);

  // Table Headers
  drawBoldText(jsonData.itemsLabel, 50, height - 280);
  drawBoldText(jsonData.quantityLabel, 250, height - 280);
  drawBoldText(jsonData.rateLabel, 350, height - 280);
  drawBoldText(jsonData.amountLabel, 450, height - 280);

  // Table Items
  let yPosition = height - 300;
  jsonData.items.forEach((item) => {
    const amount = item.quantity * item.rate;
    drawText(item.itemName, 50, yPosition);
    drawText(item.quantity.toString(), 250, yPosition);
    drawText(
      `${jsonData?.currency?.currency}${item.rate.toFixed(2)}`,
      350,
      yPosition
    );
    drawText(
      `${jsonData?.currency?.currency}${amount.toFixed(2)}`,
      450,
      yPosition
    );
    yPosition -= 20;
  });

  // Summary
  yPosition -= 20;
  drawBoldText(jsonData.subTotalLabel, 350, yPosition);
  drawText(
    `${jsonData?.currency?.currency}${jsonData.subTotal.toFixed(2)}`,
    450,
    yPosition
  );

  yPosition -= 20;
  drawBoldText(jsonData.discountLabel, 350, yPosition);
  drawText(
    `-${jsonData?.currency?.currency}${jsonData.discount.toFixed(2)}`,
    450,
    yPosition
  );

  yPosition -= 20;
  drawBoldText(jsonData.taxLabel, 350, yPosition);
  drawText(
    `${jsonData?.currency?.currency}${jsonData.tax.toFixed(2)}`,
    450,
    yPosition
  );

  yPosition -= 20;
  drawBoldText(jsonData.shippingLabel, 350, yPosition);
  drawText(
    `${jsonData?.currency?.currency}${jsonData.shipping.toFixed(2)}`,
    450,
    yPosition
  );

  yPosition -= 20;
  drawBoldText(jsonData.totalLabel, 350, yPosition);
  drawText(
    `${jsonData?.currency?.currency}${jsonData.total.toFixed(2)}`,
    450,
    yPosition
  );

  yPosition -= 20;
  drawBoldText(jsonData.amountPaidLabel, 350, yPosition);
  drawText(
    `-${jsonData?.currency?.currency}${jsonData.amountPaid.toFixed(2)}`,
    450,
    yPosition
  );

  yPosition -= 20;
  drawBoldText(jsonData.balanceDueLabel, 350, yPosition);
  drawText(
    `${jsonData?.currency?.currency}${jsonData.balanceDue.toFixed(2)}`,
    450,
    yPosition
  );

  // Notes
  yPosition -= 40;
  drawBoldText(jsonData.notesLabel, 50, yPosition);
  drawText(jsonData.notes, 50, yPosition - 20);

  // Terms
  yPosition -= 60;
  drawBoldText(jsonData.termsLabel, 50, yPosition);
  drawText(jsonData.terms, 50, yPosition - 20);

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

// Function to download the PDF (if you're running this in a browser environment)
function downloadPdf(pdfBytes: any) {
  //   const blob = new Blob([pdfBytes], { type: "application/pdf" });
  //   const url = URL.createObjectURL(blob);
  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = "invoice.pdf";
  //   a.click();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank");
}

// Run the createInvoice function and download the PDF
export async function generatePDF(data: InvoiceBasicData) {
  console.log(data);
  createInvoice(data).then((pdfBytes) => {
    downloadPdf(pdfBytes);
  });
}
