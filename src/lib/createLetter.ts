import { PDFDocument, PDFFont, PageSizes, StandardFonts, rgb } from "pdf-lib";
import { ILetterBasicData } from "@/types/ILetterBasicData";
import { UploadFile } from "antd";

async function createLetter(
  jsonData: ILetterBasicData,
  file?: UploadFile | undefined
) {
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const timesRomanBoldFont = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  let page = pdfDoc.addPage(PageSizes.A4);
  const { width, height } = page.getSize();
  const fontSize = 12;
  const margin = 50;
  const leftMargin = 70;

  const lineHeight = 20;
  const newSectionSize = 10;

  let yPosition = height - lineHeight;
  const drawBoldText = (text: any, x: any, y: any, options = {}) => {
    page.drawText(text, {
      x,
      y,
      font: timesRomanBoldFont,
      size: fontSize,
      ...options,
    });
  };
  const splitTextIntoLines = (
    text: string,
    maxWidth: number,
    fontSize: number,
    font: PDFFont
  ) => {
    const words = text.split(" ");
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const lineWidth = font.widthOfTextAtSize(
        currentLine + " " + word,
        fontSize
      );
      if (lineWidth < maxWidth) {
        currentLine += " " + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  };
  const addNewPage = () => {
    page = pdfDoc.addPage(PageSizes.A4);
    yPosition = height - margin;
  };
  const drawText = (text: string, x: number, y: number, options = {}) => {
    const maxWidth = width - 2 * margin;
    const lines = splitTextIntoLines(text, maxWidth, fontSize, timesRomanFont);

    lines.forEach((line) => {
      if (yPosition < margin) addNewPage();
      page.drawText(line, {
        x,
        y: y ? y : yPosition,
        font: timesRomanFont,
        size: fontSize,
        color: rgb(0, 0, 0),
        ...options,
      });
      yPosition -= lineHeight;
    });
  };

  drawText(`${jsonData.senderName}`, leftMargin, height - 70);
  yPosition = height - 70 - lineHeight;

  jsonData.senderAddress.split(",").forEach((line) => {
    line = line.trim();
    drawText(line + ",", leftMargin, yPosition);
  });

  drawText(`${jsonData.date}`, leftMargin, yPosition);
  yPosition -= newSectionSize;

  drawText(`${jsonData.receiverName}`, leftMargin, yPosition);
  jsonData.receiverAddress.split(",").forEach((line) => {
    line = line.trim();
    drawText(line + ",", leftMargin, yPosition);
  });

  yPosition -= 10;
  drawText(`Dear ${jsonData.addressPrefix}`, leftMargin, yPosition);
  yPosition -= newSectionSize;

  drawBoldText(`${jsonData.subject}`, leftMargin, yPosition);
  yPosition -= newSectionSize;

  jsonData.body.forEach((item) => {
    drawText(item.text, leftMargin, 0);

    yPosition -= lineHeight;
  });

  drawText(`Sincerely`, leftMargin, yPosition);
  
  if (file != undefined) {
    yPosition -= lineHeight;
    yPosition -= lineHeight;
    yPosition -= lineHeight;

    const pngImage = await pdfDoc.embedPng(file?.thumbUrl as string);
    page.drawImage(pngImage, {
      x: leftMargin,
      y: yPosition,
      width: 75,
      height: 75,
    });
    yPosition -= newSectionSize;
  }
  drawText(`${jsonData.senderName}`, leftMargin, yPosition);

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

function downloadPdf(pdfBytes: any) {
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `letter.pdf`;
  a.click();
  // const blob = new Blob([pdfBytes], { type: "application/pdf" });
  // const url = URL.createObjectURL(blob);
  // window.open(url, "_blank");
}

function viewPdf(pdfBytes: any) {
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank");
}

export async function generateLetterPDF(
  data: ILetterBasicData,
  file?: UploadFile | undefined
) {
  // console.log(data);
  createLetter(data, file).then((pdfBytes) => {
    downloadPdf(pdfBytes);
  });
}

export async function viewGeneratedLetterPDF(
  data: ILetterBasicData,
  file?: UploadFile | undefined
) {
  // console.log(data);
  createLetter(data, file).then((pdfBytes) => {
    viewPdf(pdfBytes);
  });
}
