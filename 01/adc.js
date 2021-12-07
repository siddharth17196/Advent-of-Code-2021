const fs = require('fs');
dat = fs.readFileSync('./input.txt', {encoding: 'utf-8'}).split('\n').map((i)=>{return Number(i)});

// PART 1
let arr = [];
let count = 0;
for(let i=1;i< dat.length; i++){
    if(dat[i]>dat[i-1]){
        count+=1;
    }
}
console.log(count);

// PART 2
arr = [];
for(let i=2;i< dat.length; i++){
    arr.push(dat[i]+dat[i-1]+dat[i-2]);
}
count = 0;
for(let i=0;i< arr.length; i++){
    if(arr[i]>arr[i-1]){
        count+=1;
    }
}
console.log(count);