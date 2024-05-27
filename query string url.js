function generateQueryString(object, urlString) {
    if (!object || !urlString) {
        return "Enter valid arguments!";
    }

    const params = new URLSearchParams();

    for(const [key, value] of Object.entries(object)) {
        params.append(key, value);
    }

    if(!urlString.includes('?')) {
        return `${urlString}?${params.toString()}`;
    }
    else {
        return `${urlString}&${params.toString()}`;
    }
}


const obj = {
    "keyOne": "value One",
    "keyTwo": "value Two",
    "keyThree": "value Three",
};

const url = "https://localhost:400";

console.log(generateQueryString(obj, url));

const url1 = "https://localhost:400?keyZero=value+Zero";
console.log(generateQueryString(obj, url1));

console.log(generateQueryString(obj)); // error message