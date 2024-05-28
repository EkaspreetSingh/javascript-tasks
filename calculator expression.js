function evaluate(expression) {
  let tokens = expression.split("");

  // Stack for numbers: 'values'
  let values = [];

  // Stack for Operators: 'ops'
  let ops = [];

  for (let i = 0; i < tokens.length; i++) {
    // Current token is a whitespace, skip it
    if (tokens[i] == " ") {
      continue;
    }

    if (tokens[i] >= "0" && tokens[i] <= "9") {
      let sbuf = "";

      while (i < tokens.length && tokens[i] >= "0" && tokens[i] <= "9") {
        sbuf = sbuf + tokens[i++];
      }
      values.push(parseInt(sbuf, 10));

      i--;
    }

    // Current token is an opening
    // brace, push it to 'ops'
    else if (tokens[i] == "(") {
      ops.push(tokens[i]);
    }

    // Closing brace encountered,
    // solve entire brace
    else if (tokens[i] == ")") {
      while (ops[ops.length - 1] != "(") {
        values.push(applyOp(ops.pop(), values.pop(), values.pop()));
      }
      ops.pop();
    }

    // Current token is an operator.
    else if (
      tokens[i] == "+" ||
      tokens[i] == "-" ||
      tokens[i] == "*" ||
      tokens[i] == "/"
    ) {
      // While top of 'ops' has same or greater precedence to current token, which is an operator.
      while (ops.length > 0 && hasPrecedence(tokens[i], ops[ops.length - 1])) {
        values.push(applyOp(ops.pop(), values.pop(), values.pop()));
      }

      // Push current token to 'ops'.
      ops.push(tokens[i]);
    }
  }

  while (ops.length > 0) {
    values.push(applyOp(ops.pop(), values.pop(), values.pop()));
  }

  return values.pop();
}

function hasPrecedence(op1, op2) {
  if (op2 == "(" || op2 == ")") {
    return false;
  }
  if ((op1 == "*" || op1 == "/") && (op2 == "+" || op2 == "-")) {
    return false;
  } else {
    return true;
  }
}

function applyOp(op, b, a) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b == 0) {
        console.log("Cannot divide by zero");
      }
      return parseInt(a / b, 10);
  }
  return 0;
}

console.log(evaluate("10 + 2 * 6"));
console.log(evaluate("100 * 2 + 12"));
console.log(evaluate("100 * ( 2 + 12 )"));
console.log(evaluate("100 * ( 2 + 12 ) / 14"));
console.log(evaluate("1 + ( 2 + 3 ) * 4 - 10 / 2"));
