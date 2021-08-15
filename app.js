let purchasePrice = document.querySelector('#purchase-price');
let stocksQuantity = document.querySelector('#stocks-quantity');
let currentPrice = document.querySelector('#current-price');

const checkBtn = document.querySelector('#btn-check');
const outputDiv = document.querySelector('#output');

checkBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let costPrice = purchasePrice.value;
  let qty = stocksQuantity.value;
  let currPrice = currentPrice.value;
  calculateReturn(costPrice, qty, currPrice);
});

const calculateReturn = (costPrice, qty, currPrice) => {
  let diff = (costPrice - currPrice) * qty;
  let perc = (diff / (costPrice * qty)) * 100;
  outputDiv.innerHTML = '';
  if (diff > 0) {
    outputDiv.innerHTML = `${Math.abs(perc)}% loss. Lost amount is ${Math.abs(
      diff
    )} Rupees`;
  } else if (perc < 0) {
    outputDiv.innerHTML = `${Math.abs(
      perc
    )}% profit. Profit amount is ${Math.abs(diff)} Rupees`;
  } else {
    outputDiv.innerHTML = 'Neither profit nor loss!';
  }
};
