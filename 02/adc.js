const fs = require('fs');
const data = fs.readFileSync("input.txt", { encoding: 'utf-8'}).split('\n').map((i)=>{return i.split(' ')})

// PART 1
let x = 0, y=0;
for(let i=0; i<data.length; i++) {
    if(data[i][0] === 'forward'){
        x+=parseInt(data[i][1]);
    }
    else if(data[i][0] === 'up'){
        y-=parseInt(data[i][1]);
    }
    else if(data[i][0] === 'down'){
        y+=parseInt(data[i][1]);
    }
}
console.log(x*y);

// PART 2
x = 0; y=0; let a=0;
for(let i=0; i<data.length; i++) {
    if(data[i][0] === 'forward'){
        x+=parseInt(data[i][1]);
        y+=parseInt(data[i][1])*a;
    }
    else if(data[i][0] === 'up'){
        a-=parseInt(data[i][1]);
    }
    else if(data[i][0] === 'down'){
        a+=parseInt(data[i][1]);
    }
}
console.log(x*y);