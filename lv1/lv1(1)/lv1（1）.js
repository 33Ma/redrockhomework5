
function factorial(n) {
    if (n == 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

let n = prompt('请输入一个非负整数:');
if (n !== null && !isNaN(n)) {
    const num = parseInt(n, 10);
    if (num >= 0) {
        console.log(`阶乘是: ${factorial(num)}`);
    } else {
        console.log('请输入一个非负整数.');
    }
} else {
    console.log('无效的输入.');
}// 使用递归法








