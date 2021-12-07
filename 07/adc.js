const fs = require('fs')
data = fs.readFileSync('input.txt', {encoding:'utf-8'}).split(',');

// Part 1
let cost = 100000000
for(let i = 0; i < data.length; i++){
    temp_cost = 0
    for(let j = 0; j <data.length; j++){
        temp_cost += Math.abs(data[j] - data[i]);
    }
    if(temp_cost < cost){
        cost = temp_cost;
    }
}
console.log(`Part1: ${cost}`);

// Part 2
cost = 100000000
let n;
for(let i = 0; i < data.length; i++){
    temp_cost = 0
    for(let j = 0; j <data.length; j++){
        n = Math.abs(data[j] - data[i]);  
        temp_cost += (n*(n+1))/2
    }
    if(temp_cost < cost){
        cost = temp_cost;
    }
}
console.log(`Part2: ${cost}`);