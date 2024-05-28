function compareJson(obj1, obj2) {
    // Check if the types of the two objects are different
    if (typeof obj1 !== typeof obj2) {
        return false;
    }

    // If both are non-null objects
    if (typeof obj1 === 'object' && obj1 !== null && obj2 !== null) {
        if (Array.isArray(obj1) && Array.isArray(obj2)) {
            if (obj1.length !== obj2.length) {
                return false;
            }
            // Compare each element
            for (let i = 0; i < obj1.length; i++) {
                if (!compareJson(obj1[i], obj2[i])) {
                    return false;
                }
            }
        } 
        // If both are plain objects
        else if (!Array.isArray(obj1) && !Array.isArray(obj2)) {
            let keys1 = Object.keys(obj1);
            let keys2 = Object.keys(obj2);

            // Compare number of keys
            if (keys1.length !== keys2.length) {
                return false;
            }

            // Compare each key-value pair
            for (let key of keys1) {
                if (!compareJson(obj1[key], obj2[key])) {
                    return false;
                }
            }
        } 
        else {
            return false;
        }
    } 
    // If both are not objects or one is null, compare values directly
    else {
        return obj1 === obj2;
    }

    // All checks passed, objects are equal
    return true;
}

var expected1 = {name:{
    first:'hello',
    last:'bye',
    addresss:{
        city:'noida',
        place:{
            x:1,y:2
        }
    }
}};
var actual1 = {name:{
    first:'hello',
    last:'bye',
    addresss:{
        city:'noida',
        place:{
            x:1,y:4
        }
    }
}};

var expected2 = { foo: 5, bar: 6, arr: [1, 2, 3] };
var actual2 = { foo: 5, bar: 6, arr: [1, 23, 31] };

console.log(compareJson(actual1, expected1)); // true
console.log(compareJson(actual2, expected2)); // false
