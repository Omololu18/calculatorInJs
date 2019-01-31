let output = sumRange(5)
console.log(output);

function sumRange(num){
    if(num == 1){
     return 1;
    }else{
    return num + sumRange(num - 1)
    };
}
