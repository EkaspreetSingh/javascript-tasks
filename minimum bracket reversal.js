function countMinReversals(expr) {
    const len = expr.length;

    // If length of expression is odd, it's impossible to balance
    if (len % 2 !== 0) {
        return -1;
    }

    let leftBraceCount = 0, rightBraceCount = 0;

    for (let char of expr) {
        if (char === '{') {
            leftBraceCount++;
        } else {
            // When encountering a '}', either decrement leftBraceCount or increment rightBraceCount
            if (leftBraceCount > 0) {
                leftBraceCount--;
            } else {
                rightBraceCount++;
            }
        }
    }

    // Calculating minimum reversals needed
    const reversals = Math.ceil(leftBraceCount / 2) + Math.ceil(rightBraceCount / 2);
    return reversals;
}

const expr = "{{{}";
console.log(countMinReversals(expr));
