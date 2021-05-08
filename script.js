console.log("cześć")

let formElement = document.querySelector(".js-form");
let selectCurrencyOut = document.querySelector(".js-currencyOut");
let selectCurrencyIn = document.querySelector(".js-currencyIn");
let userInput = document.querySelector(".js-userInput");
let buttonCalculate = document.querySelector(".js-button");
let buttonClear = document.querySelector(".js-buttonClear");
let outcome = document.querySelector(".js-outcome");

selectCurrencyIn.addEventListener("input", () => {
    if (selectCurrencyIn.value === selectCurrencyOut.value) {
        selectCurrencyOut = "Wybierz";
    }
});

selectCurrencyOut.addEventListener("input", () => {
    if (selectCurrencyOut.value === selectCurrencyIn.value) {
        selectCurrencyIn = "Wybierz";
    }
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = userInput.value;
    let initialCurrency = selectCurrencyIn.value;
    let finalCurrency = selectCurrencyOut.value;
    let result = 0;
    let rate = 0;
    let rateEUR = 4.5635;
    let rateGBP = 5.2359;

    switch (initialCurrency + " " + finalCurrency) {
        case "PLN EUR":
            rate = 1 / rateEUR;
            break;
        case "PLN GBP":
            rate = 1 / rateGBP;
            break;
        case "EUR PLN":
            rate = 1 * rateEUR;
            break;
        case "GBP PLN":
            rate = 1 * rateGBP;
            break;
        case "GBP EUR":
            rate = rateGBP / rateEUR;
            break;
        case "EUR GBP":
            rate = rateEUR / rateGBP;
            break;
    }
    result = amount * rate;
    if (initialCurrency === "NONE" || finalCurrency === "NONE") {
        outcome.innerHTML = "Nie wybrano waluty";
    } else {
        outcome.innerHTML = `${amount} ${initialCurrency} = ${result.toFixed(
            2
          )} ${finalCurrency}`;
        }
      });

      buttonClear.addEventListener("click", () => {
        outcome.innerHTML = "   ";
      });