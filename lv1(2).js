function factorial(n) {
    let result = 1;
    if (n == 0 || n == 1) {
        return 1;
    }
    else {

        for (let i = 1; i <= n; i++) {
            result *= i;
        }

    }
    return result;
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
}// 使用常规算法