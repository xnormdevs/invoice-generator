import { ICurrency } from "@/types/IInvoiceBasicData";

const currencies: ICurrency[] = [
  { id: "AED", currency: "د.إ" },
  { id: "AFN", currency: "؋" },
  { id: "ALL", currency: "L" },
  { id: "AMD", currency: "֏" },
  { id: "ANG", currency: "ƒ" },
  { id: "AOA", currency: "Kz" },
  { id: "ARS", currency: "$" },
  { id: "AUD", currency: "A$" },
  { id: "AWG", currency: "ƒ" },
  { id: "AZN", currency: "₼" },
  { id: "BAM", currency: "KM" },
  { id: "BBD", currency: "Bds$" },
  { id: "BDT", currency: "৳" },
  { id: "BGN", currency: "лв" },
  { id: "BHD", currency: ".د.ب" },
  { id: "BIF", currency: "FBu" },
  { id: "BMD", currency: "$" },
  { id: "BND", currency: "B$" },
  { id: "BOB", currency: "Bs." },
  { id: "BRL", currency: "R$" },
  { id: "BSD", currency: "B$" },
  { id: "BTN", currency: "Nu." },
  { id: "BWP", currency: "P" },
  { id: "BYN", currency: "Br" },
  { id: "BZD", currency: "BZ$" },
  { id: "CAD", currency: "C$" },
  { id: "CDF", currency: "FC" },
  { id: "CHF", currency: "CHF" },
  { id: "CLP", currency: "$" },
  { id: "CNY", currency: "¥" },
  { id: "COP", currency: "$" },
  { id: "CRC", currency: "₡" },
  { id: "CUP", currency: "$MN" },
  { id: "CVE", currency: "$" },
  { id: "CZK", currency: "Kč" },
  { id: "DJF", currency: "Fdj" },
  { id: "DKK", currency: "kr" },
  { id: "DOP", currency: "RD$" },
  { id: "DZD", currency: "دج" },
  { id: "EGP", currency: "£" },
  { id: "ERN", currency: "Nfk" },
  { id: "ETB", currency: "Br" },
  { id: "EUR", currency: "€" },
  { id: "FJD", currency: "FJ$" },
  { id: "FKP", currency: "£" },
  { id: "FOK", currency: "kr" },
  { id: "GBP", currency: "£" },
  { id: "GEL", currency: "₾" },
  { id: "GGP", currency: "£" },
  { id: "GHS", currency: "₵" },
  { id: "GIP", currency: "£" },
  { id: "GMD", currency: "D" },
  { id: "GNF", currency: "FG" },
  { id: "GTQ", currency: "Q" },
  { id: "GYD", currency: "G$" },
  { id: "HKD", currency: "HK$" },
  { id: "HNL", currency: "L" },
  { id: "HRK", currency: "kn" },
  { id: "HTG", currency: "G" },
  { id: "HUF", currency: "Ft" },
  { id: "IDR", currency: "Rp" },
  { id: "ILS", currency: "₪" },
  { id: "IMP", currency: "£" },
  { id: "INR", currency: "₹" },
  { id: "IQD", currency: "ع.د" },
  { id: "IRR", currency: "﷼" },
  { id: "ISK", currency: "kr" },
  { id: "JEP", currency: "£" },
  { id: "JMD", currency: "J$" },
  { id: "JOD", currency: "JD" },
  { id: "JPY", currency: "¥" },
  { id: "KES", currency: "KSh" },
  { id: "KGS", currency: "лв" },
  { id: "KHR", currency: "៛" },
  { id: "KID", currency: "$" },
  { id: "KMF", currency: "CF" },
  { id: "KRW", currency: "₩" },
  { id: "KWD", currency: "د.ك" },
  { id: "KYD", currency: "CI$" },
  { id: "KZT", currency: "₸" },
  { id: "LAK", currency: "₭" },
  { id: "LBP", currency: "ل.ل" },
  { id: "LKR", currency: "Rs" },
  { id: "LRD", currency: "L$" },
  { id: "LSL", currency: "M" },
  { id: "LYD", currency: "LD" },
  { id: "MAD", currency: "DH" },
  { id: "MDL", currency: "L" },
  { id: "MGA", currency: "Ar" },
  { id: "MKD", currency: "ден" },
  { id: "MMK", currency: "K" },
  { id: "MNT", currency: "₮" },
  { id: "MOP", currency: "MOP$" },
  { id: "MRU", currency: "UM" },
  { id: "MUR", currency: "Rs" },
  { id: "MVR", currency: "Rf" },
  { id: "MWK", currency: "MK" },
  { id: "MXN", currency: "$" },
  { id: "MYR", currency: "RM" },
  { id: "MZN", currency: "MT" },
  { id: "NAD", currency: "N$" },
  { id: "NGN", currency: "₦" },
  { id: "NIO", currency: "C$" },
  { id: "NOK", currency: "kr" },
  { id: "NPR", currency: "Rs" },
  { id: "NZD", currency: "NZ$" },
  { id: "OMR", currency: "ر.ع." },
  { id: "PAB", currency: "B/." },
  { id: "PEN", currency: "S/" },
  { id: "PGK", currency: "K" },
  { id: "PHP", currency: "₱" },
  { id: "PKR", currency: "Rs" },
  { id: "PLN", currency: "zł" },
  { id: "PYG", currency: "₲" },
  { id: "QAR", currency: "ر.ق" },
  { id: "RON", currency: "lei" },
  { id: "RSD", currency: "дин" },
  { id: "RUB", currency: "₽" },
  { id: "RWF", currency: "FRw" },
  { id: "SAR", currency: "ر.س" },
  { id: "SBD", currency: "SI$" },
  { id: "SCR", currency: "Rs" },
  { id: "SDG", currency: "ج.س." },
  { id: "SEK", currency: "kr" },
  { id: "SGD", currency: "S$" },
  { id: "SHP", currency: "£" },
  { id: "SLL", currency: "Le" },
  { id: "SOS", currency: "Sh" },
  { id: "SRD", currency: "$" },
  { id: "SSP", currency: "£" },
  { id: "STN", currency: "Db" },
  { id: "SYP", currency: "£" },
  { id: "SZL", currency: "E" },
  { id: "THB", currency: "฿" },
  { id: "TJS", currency: "SM" },
  { id: "TMT", currency: "T" },
  { id: "TND", currency: "د.ت" },
  { id: "TOP", currency: "T$" },
  { id: "TRY", currency: "₺" },
  { id: "TTD", currency: "TT$" },
  { id: "TVD", currency: "$" },
  { id: "TWD", currency: "NT$" },
  { id: "TZS", currency: "Sh" },
  { id: "UAH", currency: "₴" },
  { id: "UGX", currency: "USh" },
  { id: "USD", currency: "$" },
  { id: "UYU", currency: "$U" },
  { id: "UZS", currency: "лв" },
  { id: "VES", currency: "Bs.S" },
  { id: "VND", currency: "₫" },
  { id: "VUV", currency: "VT" },
  { id: "WST", currency: "WS$" },
  { id: "XAF", currency: "FCFA" },
  { id: "XCD", currency: "$" },
  { id: "XOF", currency: "CFA" },
  { id: "XPF", currency: "F" },
  { id: "YER", currency: "﷼" },
  { id: "ZAR", currency: "R" },
  { id: "ZMW", currency: "ZK" },
  { id: "ZWL", currency: "Z$" },
];
export default currencies;
