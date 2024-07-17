import { UploadFile } from "antd";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { hexToRgb } from "./colorFuncs";
import { InvoiceBasicData } from "@/types/IInvoiceBasicData";

async function createInvoice(
  jsonData: InvoiceBasicData,
  file?: UploadFile | undefined
) {
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const timesRomanBoldFont = await pdfDoc.embedFont(
    StandardFonts.HelveticaBold
  );

  const page = pdfDoc.addPage([600, 900]);
  const { width, height } = page.getSize();
  const fontSize = 10;
  const drawText = (text: any, x: any, y: any, options = {}) => {
    page.drawText(text, {
      x,
      y,
      font: timesRomanFont,
      size: fontSize,
      color: rgb(0.42, 0.45, 0.5),
      ...options,
    });
  };

  const drawBoldText = (text: any, x: any, y: any, options = {}) => {
    page.drawText(text, {
      x,
      y,
      font: timesRomanBoldFont,
      size: fontSize,
      ...options,
    });
  };
  if (file != undefined) {
    const pngImage = await pdfDoc.embedPng(file?.thumbUrl as string);
    page.drawImage(pngImage, {
      x: 450,
      y: height - 100,
      width: 75,
      height: 75,
    });
  }
  const { r: labelR, g: labelG, b: labelB } = hexToRgb(jsonData.labelColor);
  // Invoice Header
  const { r: titleR, g: titleG, b: titleB } = hexToRgb(jsonData.titleColor);
  drawBoldText(jsonData.invoiceName, 50, height - 50, {
    size: 20,
    color: rgb(titleR, titleG, titleB),
  });
  drawText(`#${jsonData.invoiceNumber}`, 50, height - 70);

  // Company Details
  let owneryPosition = height - 100;
  //   drawText(jsonData.owner, 50, height - 50);
  jsonData.owner.split(",").forEach((line) => {
    line = line.trim();
    drawText(line, 50, owneryPosition);
    owneryPosition -= 20;
  });
  // bill to
  drawBoldText(jsonData.billToLabel, 50, height - 180, {
    color: rgb(labelR, labelG, labelB),
  });
  let billToyPosition = height - 200;
  jsonData.billTo.split(",").forEach((line) => {
    line = line.trim();
    drawText(line, 50, billToyPosition);
    billToyPosition -= 20;
  });

  // ship to
  if (jsonData.shipTo) {
    drawBoldText(jsonData.shipToLabel, 200, height - 180, {
      color: rgb(labelR, labelG, labelB),
    });
    let shipToyPosition = height - 200;
    jsonData.shipTo.split(",").forEach((line) => {
      line = line.trim();
      drawText(line, 200, shipToyPosition);
      shipToyPosition -= 20;
    });
  }

  // Invoice Details
  let detailsYPosition = height - 180;

  if (jsonData.date) {
    drawText(jsonData.dateLabel, 350, detailsYPosition, {
      color: rgb(labelR, labelG, labelB),
    });
    drawText(jsonData.date, 450, detailsYPosition);
    detailsYPosition -= 20;
  }

  if (jsonData.paymentTerms) {
    drawText(jsonData.paymentTermsLabel, 350, detailsYPosition, {
      color: rgb(labelR, labelG, labelB),
    });
    drawText(jsonData.paymentTerms, 450, detailsYPosition);
    detailsYPosition -= 20;
  }

  if (jsonData.dueDate) {
    drawText(jsonData.dueDateLabel, 350, detailsYPosition, {
      color: rgb(labelR, labelG, labelB),
    });
    drawText(jsonData.dueDate, 450, detailsYPosition);
    detailsYPosition -= 20;
  }

  if (jsonData.poNumber) {
    drawText(jsonData.poNumberLabel, 350, detailsYPosition, {
      color: rgb(labelR, labelG, labelB),
    });
    drawText(jsonData.poNumber, 450, detailsYPosition);
  }

  const {
    r: tableR,
    g: tableG,
    b: tableB,
  } = hexToRgb(jsonData.tableHeaderColor);
  const {
    r: tableTitleR,
    g: tableTitleG,
    b: tableTitleB,
  } = hexToRgb(jsonData.tableHeaderTitleColor);
  //  table header color
  page.drawRectangle({
    x: 40,
    y: height - 285,
    width: 470,
    height: 20,
    color: rgb(tableR, tableG, tableB),
  });
  // Table Headers
  drawText(jsonData.itemsLabel, 50, height - 280, {
    color: rgb(tableTitleR, tableTitleG, tableTitleB),
  });
  drawText(jsonData.quantityLabel, 270, height - 280, {
    color: rgb(tableTitleR, tableTitleG, tableTitleB),
  });
  drawText(jsonData.rateLabel, 350, height - 280, {
    color: rgb(tableTitleR, tableTitleG, tableTitleB),
  });
  drawText(jsonData.amountLabel, 450, height - 280, {
    color: rgb(tableTitleR, tableTitleG, tableTitleB),
  });

  // Table Items
  let yPosition = height - 300;
  jsonData.items.forEach((item) => {
    const amount = item.quantity * item.rate;
    drawText(item.itemName, 50, yPosition);
    drawText(item.quantity.toString(), 270, yPosition);
    drawText(
      `${jsonData?.currency?.currency}${Number(item.rate).toFixed(2)}`,
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
  drawBoldText(jsonData.subTotalLabel, 350, yPosition, {
    color: rgb(labelR, labelG, labelB),
  });
  drawText(
    `${jsonData?.currency?.currency}${jsonData.subTotal.toFixed(2)}`,
    450,
    yPosition
  );

  if (jsonData.discount > 0) {
    yPosition -= 20;
    drawBoldText(jsonData.discountLabel, 350, yPosition, {
      color: rgb(labelR, labelG, labelB),
    });
    drawText(
      `-${jsonData?.currency?.currency}${Number(jsonData.discount).toFixed(2)}`,
      450,
      yPosition
    );
  }

  if (jsonData.tax > 0) {
    yPosition -= 20;
    drawBoldText(jsonData.taxLabel, 350, yPosition, {
      color: rgb(labelR, labelG, labelB),
    });
    drawText(
      `${jsonData?.currency?.currency}${Number(jsonData.tax).toFixed(2)}`,
      450,
      yPosition
    );
  }

  if (jsonData.shipping > 0) {
    yPosition -= 20;
    drawBoldText(jsonData.shippingLabel, 350, yPosition, {
      color: rgb(labelR, labelG, labelB),
    });
    drawText(
      `${jsonData?.currency?.currency}${Number(jsonData.shipping).toFixed(2)}`,
      450,
      yPosition
    );
  }

  yPosition -= 20;
  drawBoldText(jsonData.totalLabel, 350, yPosition, {
    color: rgb(labelR, labelG, labelB),
  });
  drawText(
    `${jsonData?.currency?.currency}${jsonData.total.toFixed(2)}`,
    450,
    yPosition
  );

  yPosition -= 20;
  drawBoldText(jsonData.amountPaidLabel, 350, yPosition, {
    color: rgb(labelR, labelG, labelB),
  });
  drawText(
    `-${jsonData?.currency?.currency}${Number(jsonData.amountPaid).toFixed(2)}`,
    450,
    yPosition
  );

  yPosition -= 20;
  drawBoldText(jsonData.balanceDueLabel, 350, yPosition, {
    color: rgb(labelR, labelG, labelB),
  });
  drawText(
    `${jsonData?.currency?.currency}${jsonData.balanceDue.toFixed(2)}`,
    450,
    yPosition
  );

  // Notes
  yPosition -= 40;
  drawBoldText(jsonData.notesLabel, 50, yPosition, {
    color: rgb(labelR, labelG, labelB),
  });
  drawText(jsonData.notes, 50, yPosition - 20);

  // Terms
  yPosition -= 60;
  drawBoldText(jsonData.termsLabel, 50, yPosition, {
    color: rgb(labelR, labelG, labelB),
  });
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
export async function generatePDF(
  data: InvoiceBasicData,
  file?: UploadFile | undefined
) {
  // console.log(data);
  createInvoice(data, file).then((pdfBytes) => {
    downloadPdf(pdfBytes);
  });
}
