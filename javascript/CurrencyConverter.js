// Can you solve this Google interview question?
// So, let's say that you get a function called convert currency,
// where you have three inputs. One is the list of currencies and the conversion rates,
// your starting currency, and then the ending currency.
// In the list of currencies, you are going to have three values the starting currency, the ending currency, and the conversion rate from the starting to the ending currency.

// For example, the starting currency could be US dollars.
// And the second currency could be Great British pounds.
// And the conversion rate would be 0.77 and what that means is $1 is equal to 0.77 pounds.
// Given the above parameters, find the conversion rate from the starting currency to the end currency.

//The returned value should be a number. You have 45 minutes to solve this question. Best of luck.

/**
 *
 * @param {Array<[string, string, number]>} conversionRates List of conversion rates
 * @param {string} startingCurr Starting currency
 * @param {string} endingCurr Ending currency
 */
function convertCurrency(conversionRates, startingCurr, endingCurr) {

}

class Graph {
  #vertext = new Map();
  
}

const conversionRate = convertCurrency(
  [
    ['USD', 'JPY', 110],
    ['USD', 'AUD', 1.45],
    ['JPY', 'GBP', 0.007],
  ],
  'GBP',
  'AUD'
);
const answer = 1.883116883116883;

console.assert(conversionRate === answer);
