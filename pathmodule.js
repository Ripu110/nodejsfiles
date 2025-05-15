const path = require('path');

const a1 = path.basename('c:\\temp\\myfile.html'); // Returns 'myfile.html'
const a2 = path.dirname('c:\\temp\\myfile.html'); // Returns 'c:\\temp'
console.log(a1);
console.log(a2);

const a3 = path.extname(__filename); 
console.log(__filename, a3); // Returns '.js'