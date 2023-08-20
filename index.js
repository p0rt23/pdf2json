import PDFParser from "pdf2json";

// https://github.com/modesty/pdf2json/issues/76
const pdfParser = new PDFParser(this, true);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
  // console.log(JSON.stringify(pdfData));
  console.log(pdfParser.getRawTextContent());
});

pdfParser.loadPDF("sample.pdf");
