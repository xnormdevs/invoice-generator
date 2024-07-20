export interface ILetterBasicData {
  senderName: string;
  senderAddress: string;
  date: string;
  receiverName: string;
  receiverAddress: string;
  subject: string;
  addressPrefix: string;
  body: ILetterParagraph[];
  signature: string;
}

export interface ILetterParagraph {
  id: string;
  text: string;
}
