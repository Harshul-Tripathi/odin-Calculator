const display = document.querySelector("#display");

let currentExpression = "";
let shouldResetDisplay = false;

const updateDisplay = () => {
  display.textContent = currentExpression;
};

const appendToExpression = (value, actualValue = value) => {
  if (shouldResetDisplay) {
    currentExpression = "";
    shouldResetDisplay = false;
  }
  currentExpression += value;
  updateDisplay();
};

document.querySelector(".allClear").addEventListener("click", () => {
  currentExpression = "";
  updateDisplay();
});

document.querySelector(".delete").addEventListener("click", () => {
  currentExpression = currentExpression.slice(0, -1);
  updateDisplay();
});

document.querySelector(".equal").addEventListener("click", () => {
  try {
    const sanitizedExpression = currentExpression
      .replace(/×/g, "*")
      .replace(/÷/g, "/");
    const result = eval(sanitizedExpression);
    currentExpression = result.toString();
    updateDisplay();
    shouldResetDisplay = false;
  } catch {
    display.textContent = "Error";
  }
});

for (let i = 0; i <= 9; i++) {
  document.querySelector(`.num${i}`).addEventListener("click", () => {
    appendToExpression(i.toString());
  });
}

document.querySelector(".addition").addEventListener("click", () => {
  appendToExpression("+");
});

document.querySelector(".subtract").addEventListener("click", () => {
  appendToExpression("-");
});

document.querySelector(".multiply").addEventListener("click", () => {
  appendToExpression("×", "*");
});

document.querySelector(".divide").addEventListener("click", () => {
  appendToExpression("÷", "/");
});

document.querySelector(".period").addEventListener("click", () => {
  appendToExpression(".");
});
