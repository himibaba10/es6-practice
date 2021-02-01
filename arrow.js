// function doubleIt(num) {
//     return num * 2;
// }

// doubleIt = function(num){
//     return num * 2;
// }

doubleIt = num => num * 2;
add = (x,y) => x+y;
avg = (num1,num2) => {
    const sum = num1 + num2;
    const avg = sum/2;
    return avg;
}


const result = doubleIt(8);
// console.log(result);

const result2 = add(10,12);
// console.log(result2);

const result3 = avg(4,8);
console.log(result3)