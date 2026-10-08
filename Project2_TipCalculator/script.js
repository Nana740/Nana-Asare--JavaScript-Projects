// -------- Selecting Elements --------
const billInput = document.querySelector('#bill');
const tipInput = document.querySelector('#tip');
const calculateBtn = document.querySelector('#calculate-btn');
const message = document.querySelector('#message');
const tipAmountDisplay = document.querySelector('#tip-amount');
const totalAmountDisplay = document.querySelector('#total-amount');
 
// ---------- Listen for a click on "Calculate" ----------
calculateBtn.addEventListener('click', () => {
  // Input values always come back as strings, so convert them to numbers
  const bill = Number(billInput.value);
  const tipPercent = Number(tipInput.value);
 
  // Stop if the bill is empty or not above zero
  if (bill <= 0) {
    message.textContent = "Please enter a bill amount greater than 0.";
    tipAmountDisplay.textContent = "0.00";
    totalAmountDisplay.textContent = "0.00";
    return;
  }
 
  // Clear any old message
  message.textContent = "";
 
  // The formulas 
  const tipAmount = bill * (tipPercent / 100);
  const totalBill = bill + tipAmount;
 
  // DOM update with the results (2 decimal places)
  tipAmountDisplay.textContent = tipAmount.toFixed(2);
  totalAmountDisplay.textContent = totalBill.toFixed(2);
});
 