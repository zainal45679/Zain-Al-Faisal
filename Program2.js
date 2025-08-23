function pattern(a){
  const series = [];
  let num = 1;
    for (let i = 0; i < a ; i++){
      series.push(num);
      num += 2;
    }
    return series;
}

// Some examples

console.log(pattern(0));  // []
console.log(pattern(1));  // [1]
console.log(pattern(5));  // [1, 3, 5, 7, 9]
console.log(pattern(7));  // [1, 3, 5, 7, 9, 11, 13]
console.log(pattern(10)); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

