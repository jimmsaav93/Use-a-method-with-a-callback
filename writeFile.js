const fs = require('fs');

const content = 'Hello, this is a text file created using Node.js fs.writeFile() method.';

const filePath = 'output.txt';

fs.writeFile(filePath, content, (err) => {
    if (err) {
        console.error('An error occurred while writing to the file:', err);
        return;
    }
    console.log('File has been written successfully');
});