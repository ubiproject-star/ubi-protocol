const fs = require('fs');
const pdf = require('pdf-parse');

const pdfPath = 'ubiprotocolpdf.pdf';

if (!fs.existsSync(pdfPath)) {
    console.error("PDF file not found at: " + pdfPath);
    process.exit(1);
}

let dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function (data) {
    if (!data.text || data.text.trim().length === 0) {
        console.log("NO_TEXT_FOUND");
    } else {
        console.log(data.text);
    }
}).catch(function (error) {
    console.error("Error parsing pdf: " + error);
});
