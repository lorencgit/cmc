export default {
  BARCODE_GENERATOR_TYPE_OPTS: [
    "Code128",
    "Code39",
    "Postnet",
    "UPCA",
    "EAN8",
    "ISBN",
    "Codabar",
    "I2of5",
    "Code93",
    "EAN13",
    "JAN13",
    "Bookland",
    "UPCE",
    "PDF417",
    "PDF417Truncated",
    "DataMatrix",
    "QRCode",
    "Aztec",
    "Planet",
    "EAN128",
    "GS1_128",
    "USPSSackLabel",
    "USPSTrayLabel",
    "DeutschePostIdentcode",
    "DeutschePostLeitcode",
    "Numly",
    "PZN",
    "OpticalProduct",
    "SwissPostParcel",
    "RoyalMail",
    "DutchKix",
    "SingaporePostalCode",
    "EAN2",
    "EAN5",
    "EAN14",
    "MacroPDF417",
    "MicroPDF417",
    "GS1_DataMatrix",
    "Telepen",
    "IntelligentMail",
    "GS1_DataBar_Omnidirectional",
    "GS1_DataBar_Truncated",
    "GS1_DataBar_Stacked",
    "GS1_DataBar_Stacked_Omnidirectional",
    "GS1_DataBar_Limited",
    "GS1_DataBar_Expanded",
    "GS1_DataBar_Expanded_Stacked",
    "MaxiCode",
    "Plessey",
    "MSI",
    "ITF14",
    "GTIN12",
    "GTIN8",
    "GTIN13",
    "GTIN14",
  ],
  BARCODE_READER_TYPE_OPTS: [
    "AustralianPostCode",
    "Aztec",
    "CircularI2of5",
    "Codabar",
    "CodablockF",
    "Code128",
    "Code16K",
    "Code39",
    "Code39Extended",
    "Code39Mod43",
    "Code39Mod43Extended",
    "Code93",
    "DataMatrix",
    "EAN13",
    "EAN2",
    "EAN5",
    "EAN8",
    "GS1",
    "GS1DataBarExpanded",
    "GS1DataBarExpandedStacked",
    "GS1DataBarLimited",
    "GS1DataBarOmnidirectional",
    "GS1DataBarStacked",
    "GTIN12",
    "GTIN13",
    "GTIN14",
    "GTIN8",
    "IntelligentMail",
    "Interleaved2of5",
    "ITF14",
    "MaxiCode",
    "MICR",
    "MicroPDF",
    "MSI",
    "PatchCode",
    "PDF417",
    "Pharmacode",
    "PostNet",
    "PZN",
    "QRCode",
    "RoyalMail",
    "RoyalMailKIX",
    "Trioptic",
    "UPCA",
    "UPCE",
    "UPU",
  ],
  PAPER_SIZE_OPTS: [
    "Letter",
    "Legal",
    "Tabloid",
    "Ledger",
    "A0",
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
  ],
  ORIENTATION_OPTS: [
    "Portrait",
    "Landscape",
  ],
  MEDIA_TYPE_OPTS: [
    "print",
    "screen",
    "none",
  ],
  ANYTHING_TO_PDF_SOURCE_TYPES: [
    {
      label: "CSV, XLS, XLSX",
      value: "/pdf/convert/from/csv",
    },
    {
      label: "DOC, DOCX, RTF, TXT, XPS",
      value: "/pdf/convert/from/doc",
    },
    {
      label: "JPG, PNG, TIFF",
      value: "/pdf/convert/from/image",
    },
    {
      label: "PDF from URL",
      value: "/pdf/convert/from/url",
    },
    {
      label: "PDF from HTML",
      value: "/pdf/convert/from/html",
    },
    {
      label: "PDF from EMAIL",
      value: "/pdf/convert/from/email",
    },
    {
      label: "PDF from XLS",
      value: "/xls/convert/to/pdf",
    },
  ],
  PDF_TO_ANYTHING_OUTPUT_TYPES: [
    {
      label: "PDF To CSV",
      value: "/pdf/convert/to/csv",
    },
    {
      label: "PDF To JSON",
      value: "/pdf/convert/to/json2",
    },
    {
      label: "PDF To Text",
      value: "/pdf/convert/to/text",
    },
    {
      label: "PDF To Text Simple",
      value: "/pdf/convert/to/text-simple",
    },
    {
      label: "PDF To XLS",
      value: "/pdf/convert/to/xls",
    },
    {
      label: "PDF To XLSX",
      value: "/pdf/convert/to/xlsx",
    },
    {
      label: "PDF To XML",
      value: "/pdf/convert/to/xml",
    },
    {
      label: "PDF To HTML",
      value: "/pdf/convert/to/html",
    },
    {
      label: "PDF To JPG",
      value: "/pdf/convert/to/jpg",
    },
    {
      label: "PDF To PNG",
      value: "/pdf/convert/to/png",
    },
    {
      label: "PDF To WEBP",
      value: "/pdf/convert/to/webp",
    },
    {
      label: "PDF To TIFF",
      value: "/pdf/convert/to/tiff",
    },
  ],
  CUSTOM_CALL_METHODS: [
    "POST",
    "GET",
  ],
};
