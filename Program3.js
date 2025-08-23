function pattern(a){
  const series = [];
  let num = 1;
  if(a % 2 === 0){
    a = a-1
  }
    for (let i = 0; i < a ; i++){
        series.push(num);
        num += 2;
    }
    return series;
}

// Some Examples


console.log(pattern(1));  // [1]
console.log(pattern(0));  // []  
console.log(pattern(5));  // [1, 3, 5, 7, 9]  
console.log(pattern(6));  // [1, 3, 5, 7, 9]  
console.log(pattern(7));  // [1, 3, 5, 7, 9, 11, 13]
