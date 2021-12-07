const fs = require('fs')
data = fs.readFileSync('input.txt', {encoding:'utf-8'}).split('\n');

// PART 1
let eps = '', gam ='';
let count1;
let max_array = []; // tracking max bit at each position for the second part
for(let j = 0; j < data[0].length; j++){
    count1 = 0; // counting ones
    for(let i=0; i<data.length; i++){
        data[i][j] === '1'? count1++: 0;
    }
    if(count1>=data.length/2){
        max_array.push('1');
        eps+='0';
        gam+='1';
    }else{
        max_array.push('0');
        eps+='1';
        gam+='0';
    }
}
console.log(parseInt(eps, 2)*parseInt(gam, 2));

// PART 2
let data1 = [], data2 = [];
data.forEach((d) => {
    d[0]===max_array[0] ? data1.push(d): data2.push(d);
})
let temp;
i = 1;
while(true){
    if(data1.length==1){
        break;
    }
    temp = [];
    data1.forEach((d) => {d[i]===max_array[i] ? temp.push(d): 0;})
    data1 = temp;
    i+=1;
}
console.log(parseInt(data1,2));