const math = require('./math');
const fs = require('fs');
const path = require('path');
const loger = require('./utils/logger');

const filePath = path.join(__dirname, 'data.txt');
fs.readFile('data.txt', 'utf-8', (err, data) => {
    if(err)
    {
        console.error(err);
        return;
    }
    console.log(data);
});

console.log(filePath);


loger.log("Node JS day 3 task completed");

// console.log(math.add(50,70));

