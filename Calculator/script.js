const buttons = document.querySelectorAll(".button");
const input = document.querySelector(".input");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.value;
    if (value === "C") {
      input.value = "";
    }
    else if (value === "=") {
      try {
        const result = calculate(input.value);
        input.value = result;
      } catch (error) {
        input.value = "Error";
      }
    }
    else {
      input.value += value;
    }
  });
});

function calculate(expression) {
  let result = 0;
  let operator = "+";
  let number = "";

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

   
    if (/\d/.test(char)) {
      number += char;
    }
   
    if (/[\+\-\*\/]/.test(char) || i === expression.length - 1) {
      const operand = parseFloat(number);

      
      switch (operator) {
        case "+":
          result += operand;
          break;
        case "-":
          result -= operand;
          break;
        case "*":
          result *= operand;
          break;
        case "/":
          result /= operand;
          break;
      }
      number = "";
      operator = char;
    }
  }

  return result;
}
