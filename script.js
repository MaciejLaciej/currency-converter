console.log("cześć")

const formElement = document.querySelector(".js-form");
const selectCurrencyOut = document.querySelector(".js-currencyOut");
const selectCurrencyIn = document.querySelector(".js-currencyIn");
const userInput = document.querySelector(".js-userInput");
const buttonCalculate = document.querySelector(".js-button");
const buttonClear = document.querySelector(".js-buttonClear");
const outcome = document.querySelector(".js-outcome");

const rate = (initialCurrency, finalCurrency) => {
    const rateEUR = 4.5635;
    const rateGBP = 5.2359;
    switch (initialCurrency + " " + finalCurrency) {
        case "PLN EUR":
            return 1 / rateEUR;
        case "PLN GBP":
            return 1 / rateGBP;
            
        case "EUR PLN":
            return 1 * rateEUR;
            
        case "GBP PLN":
            return 1 * rateGBP;
            
        case "GBP EUR":
            return rateGBP / rateEUR;
            
        case "EUR GBP":
            return rateEUR / rateGBP;
            
    }
};


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = userInput.value;
    const initialCurrency = selectCurrencyIn.value;
    const finalCurrency = selectCurrencyOut.value;
    let result = +rate(initialCurrency, finalCurrency) * amount;
    
    outcome.innerHTML = (initialCurrency === "NONE" || finalCurrency === "NONE") 
    ? "Nie wybrano waluty"
    : {
        outcome.innerHTML = `${amount} ${initialCurrency} = ${result.toFixed(
            2
          )} ${finalCurrency}`;
        }

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