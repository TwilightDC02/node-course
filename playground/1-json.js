const fs = require('fs')
// const book = {
//     title: 'Harry Potter',
//     author: 'Severus Snape'
// }

// // parsedData is for string, stringify turns into string
// const parsedData = JSON.parse(JSON.stringify(book));
// console.log(parsedData.author);

// fs.writeFileSync('1-json.json', JSON.stringify(book))

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON)

console.log(dataJSON);
console.log(data);


data.name = 'Bon';
data.planet = 'Jupiter';
data.age = 20;

console.log(data);

const user = JSON.stringify(data)
fs.writeFileSync('1-json.json', user)
