const fs = require('fs');
// const _ = require('lodash');

data = fs.readFileSync('inp.txt', {encoding:'utf-8'}).split('\n');

data = data.filter((x)=>{
    if(x.length > 2)
        return x.trim(' ');
})
nums = data[0].trim(' ').split(',').map(i => Number(i));
data.splice(nums, 1);
data = data.map((x)=>{
    return x.trim(' ').replace(/  +/g, ' ').split(' ').map((y)=>{return parseInt(y)})
})

console.log(data);