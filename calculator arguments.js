function calculator(arr, op) {

    if(op == "add") return arr.reduce((acc,curr)=> acc+curr)
    else if(op == "substract") return arr.reduce((acc,curr)=> acc-curr)
    else if(op == "multiply") return arr.reduce((acc,curr)=> acc*curr)

}

const arr = [2,3,4,4,1]
const addition = calculator(arr, "add");
console.log(addition);