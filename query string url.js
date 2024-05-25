function generateQueryString(object, urlString) {
    if (!Object.entries(object).length || !urlString.length) {
        return "Enter valid arguments!";
    }

    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(object)) {
        params.append(key, value);
    }

    return `${urlString}?${params.toString()}`;
}

function main() {
    const obj = {
        "keyOne": "value One",
        "keyTwo": "value Two",
        "keyThree": "value Three",
    };
    const url = "https://localhost:400";

    console.log(generateQueryString(obj, url));
}

main();
