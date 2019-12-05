function getTotalX(a, b) {
    // Write your code here
    const result = [];
    let gcd = b[0];
    let num;
    for (var i = 1; i < b.length; i++) {
        num = b[i];
        gcd = gcd_two_numbers(gcd, num);
    }

    result.push(gcd);
}

function gcd_two_numbers(x,y) {
    while (y) {
        let t = y;
        y = x % y;
        x = t;
    }
    return x;
}

const a = [2, 4]
const b =[16, 32, 96]

console.log(getTotalX(a,b))