const fs = require('fs');
const mammoth = require('mammoth');

const filePath = 'Notes_251207_160006.docx';

if (!fs.existsSync(filePath)) {
    console.error("File not found: " + filePath);
    process.exit(1);
}

mammoth.extractRawText({ path: filePath })
    .then(result => {
        console.log(result.value);
    })
    .catch(err => {
        console.error("Error extracting text:", err);
    });
