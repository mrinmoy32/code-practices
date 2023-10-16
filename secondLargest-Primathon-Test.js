const secondLarest = (arr) => {
    let result;
    let temp;
    for(let i = 0; i< arr.length; i++){
        for( let j=i+1; j<arr.length-i; j++ ){
            if(arr[i]> arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    result = arr[arr.length-2];
    return result;
}

console.log(secondLarest([12, 35, 1, 10, 34, 1]));