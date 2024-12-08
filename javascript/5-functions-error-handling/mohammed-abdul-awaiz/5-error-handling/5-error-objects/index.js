document
  .getElementById("bankingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    handleWithdrawal();
  });

function withdrawAmount(accountBalance, withdrawalAmount) {
  if (withdrawalAmount > accountBalance) {
    throw {
      errorCode: 101,
      errorMessage: "insufficient funds. cannot process the withdrawal.",
    };
  }
  return accountBalance - withdrawalAmount;
}

function handleWithdrawal() {
  const accountBalanceInput = document
    .getElementById("accountBalance")
    .value.trim();
  const withdrawalAmountInput = document
    .getElementById("withdrawalAmount")
    .value.trim();
  const resultDiv = document.getElementById("result");

  resultDiv.textContent = "";

  try {
    const accountBalance = parseFloat(accountBalanceInput);
    const withdrawalAmount = parseFloat(withdrawalAmountInput);

    if (isNaN(accountBalance) || isNaN(withdrawalAmount)) {
      throw {
        errorCode: 102,
        errorMessage: "invalid input. please enter valid numeric values.",
      };
    }

    const remainingBalance = withdrawAmount(accountBalance, withdrawalAmount);

    resultDiv.textContent = `withdrawal successful! remaining balance: $${remainingBalance.toFixed(
      2
    )}`;
  } catch (error) {
    resultDiv.textContent = `error ${error.errorCode}: ${error.errorMessage}`;
  }
}
