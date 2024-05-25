function compareJson(actual, expected) { 
    return JSON.stringify(actual) === JSON.stringify(expected);
}

var expected1 = { foo: 5, bar: 6 };
var actual1 = { foo: 5, bar: 6 };

var expected2 = { foo: 5, bar: 6 };
var actual2 = { foo: 6, bar: 5 };

console.log(compareJson(actual1, expected1));
console.log(compareJson(actual2, expected2));