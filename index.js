import { strict as assert } from 'node:assert';
import PDFParser from "pdf2json";

let pdfs = [
  "sample.pdf"
]

pdfs.forEach(filename => {
  // https://www.npmjs.com/package/pdf2json
  // https://github.com/modesty/pdf2json/issues/76
  const pdfParser = new PDFParser(this, true);

  const testPdf = (pages) => {
    // console.log(pages[24]);
    // paragraphs contain linebreaks that need to be removed for string matching
    const page25 = pages[24].replace(/[\r\n]+/gm, " ");
    assert.equal(
      page25.includes("46% of firms in your group reported using a client segmentation strategy"),
      true,
      "Page 25 does not contain the client segmentation strategy."
    );

    console.log("All tests pass!");
  }

  const processPdf = (pdfData) => {
    // pdfData contains metadata and all text objects
    // console.log(JSON.stringify(pdfData));
    const rawTextContent = pdfParser.getRawTextContent();

    const pages = rawTextContent.split(/\-+Page \(\d+\) Break\-+/);
    if (pages[pages.length - 1].trim() == "") {
      pages.pop();
    }

    testPdf(pages);
  }

  pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
  pdfParser.on("pdfParser_dataReady", processPdf);
  pdfParser.loadPDF(filename);
});
