const _ = require('lodash');


let obj1 = {
    name : "Manoj",
    address : {
        city : "Bangalore",
        state : "Karnataka",
        country : "India"
    }
}

let obj2 = {
    name : {
        first:'helo',
        last:'bye'
    },
    address : {
        city : "Bangalore",
        state : "Karnataka",
        country : "India"
    }
}


function shallowCopy(obj) {
    let obj1 = Object.assign({}, obj);
    // let obj1 = {...obj};    //we can use this method too
    obj1.name = "Peter"
    obj1.address.city = "Noida";
    
    console.log("shallow copy: " + JSON.stringify(obj1, null, 2));
    console.log("original object: " + JSON.stringify(obj, null, 2));
}

function deepCopy(obj) {
    let obj1 = _.cloneDeep(obj);
    // let obj1 = JSON.parse(JSON.stringify(obj));    //we can use this method too
    // obj1.name = "Peter";
    // obj1.address.city = "Noida";
    
    console.log("deep copy: " + JSON.stringify(obj1, null, 2));
    console.log("original object: " + JSON.stringify(obj, null, 2));
}

function deepCopyRecur(obj) {
    let copyObj = {};
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            copyObj[key] = deepCopyRecur(obj[key]);
        } else {
            copyObj[key] = obj[key];
        }
    }
    return copyObj;
}

// shallowCopy(obj1);

// deepCopy(obj2);
//use other approch

console.log(deepCopyRecur(obj2))