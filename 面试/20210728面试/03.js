console.log('Hello World!');
function add(num1, num2) {
    const len1 = num1.length;
    const len2 = num2.length;
    let str = '';
    if (len1 > len2) {
        for(let i = 0; i < len1 - len2; i++) {
            str += '0';
        }
        num2 = str + num2;
    }  else if (len2 > len1) {
        for(let i = 0; i < len2 - len1; i++) {
            str += '0';
        }
        num1 = str + num1;
    }
    let tmp = 0;
    let ret = '';
    for(let i = num1.length - 1; i >= 0; i--) {
        let res = Number(num1[i]) + Number(num2[i]);
        ret = (res % 10 + tmp) + ret;
        // tmp = res / 10;
        tmp = Math.floor(res / 10);
    }
//     return ret;
    return tmp ? tmp + ret : ret;
}

console.log(add('123456789', '987654321'));
console.log(123456789 + 987654321);