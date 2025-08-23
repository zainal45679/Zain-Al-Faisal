function countMultiples(arr){
    const result = {};

    for(let i = 1 ; i <= 9; i++){
        let count = 0;
        for(let j = 0; j < arr.length; j++){
            if(arr[j] % i === 0){
                count++;
            }
        }
        result[i] = count;
    }
    return result;
}

// Sample example

const inputArr = [1,2,8,9,12,46,76,82,15,20,30];
console.log(countMultiples(inputArr));