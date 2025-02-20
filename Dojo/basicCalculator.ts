/**
 * Implement a basic calculator to evaluate a simple expression string.
 * The expression string can contain opening parentheses (and closing parentheses),
 * the plus sign + or minus -, the * sign, the / sign, and non-negative integers,
 * as well as empty spaces. The given expression will always be valid.
 * 
 * Some examples: "1 + 1" = 2, "(1)" = 1, "(1-(4-5))" = 2
 * 
 * Example 1:
 * Input: givenExpression = "(1 - (4-5))"
 * Output:  2
 * 
 * Example 2:
 * Input: givenExpression = "4+5(12/2  )+3*4"
 * Output:  46
 */

export function sum(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

export function basicCalculator(expression: string): number {
  const operatorPriority: { [key: string]: number } = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
  };

  const applyOperation = (a: number, b: number, operator: string): number => {
    switch (operator) {
      case '+':
        return sum(a, b);
      case '-':
        return subtract(a, b);
      case '*':
        return multiply(a, b);
      case '/':
        return divide(a, b);
      default:
        return 0;
    }
  }

  const evaluate = (tokens: string[]): number => {
    const values: number[] = [];
    const operations: string[] = [];
    
    for (const token of tokens) {
      if (!isNaN(Number(token))) {
        values.push(Number(token));
      } else if (token === '(') {
        if (values.length > 0 && values.length > operations.length) {
          operations.push('*');
        }
        operations.push(token);
      } else if (token === ')') {
        while (operations.length > 0 && operations[operations.length - 1] !== '(') {
          const b = values.pop()!;
          const a = values.pop()!;
          const operation = operations.pop()!;
          values.push(applyOperation(a, b, operation));
        }
        operations.pop();
      } else if (operatorPriority[token]) {
        while (operations.length > 0 && operatorPriority[operations[operations.length - 1]] >= operatorPriority[token]) {
          const b = values.pop()!;
          const a = values.pop()!;
          const operation = operations.pop()!;
          values.push(applyOperation(a, b, operation));
        }
        operations.push(token);
      }
    }

    while (operations.length > 0) {
      const b = values.pop()!;
      const a = values.pop()!;
      const operation = operations.pop()!;
      values.push(applyOperation(a, b, operation));
    }
  
    return values[0];
  }
  
  const tokens: string[] = [];
  let numberBuffer = '';

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (char === ' ') {
      continue;
    }

    if(!isNaN(Number(char))) {
      numberBuffer += char;
    } else {
      if (numberBuffer) {
        tokens.push(numberBuffer);
        numberBuffer = '';
      }
      tokens.push(char);
    }
  }

  if (numberBuffer) {
    tokens.push(numberBuffer);
  }
  
  return evaluate(tokens);
}
