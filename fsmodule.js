// using commonjs syntax
const fs = require('fs');

//fs.readFile('file.txt', 'utf8', (err, data) => {
//    console.log(err,data)

//})

const a = fs.readFileSync('file.txt')
console.log(a.toString());

//fs.writeFile('file2.txt', 'Data is here', () => {
//    console.log('File written');
//});

b = fs.writeFileSync('file2.txt', 'Another data is here for us');
console.log(b);
console.log('Finished reading file');