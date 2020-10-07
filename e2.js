function findOdd(num){
    return num % 2 == 1; 
}
function twoFive(num){
    if (num % 2 == 0 || num % 5 == 0){
        return true;
    }
    return false;
}
function threeSqr(num){
    return num * 9;
}
function square(num){
    return Math.pow(num, 2);
}
function five(num){
    return num % 5 == 0;
}
function sum(num1, num2){
    return num1 + num2;
}
beep = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("a) " + beep.filter(findOdd));
console.log("b) " + beep.filter(twoFive));
console.log("c) " + beep.map(threeSqr));
beep = beep.filter(five);
beep = beep.map(square);
console.log("d) " +beep.reduce(sum, 0));