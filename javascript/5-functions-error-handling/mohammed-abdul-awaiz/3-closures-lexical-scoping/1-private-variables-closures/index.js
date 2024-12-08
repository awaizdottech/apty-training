// A closure is a function having access to the parent scope, even after the parent function has closed. It makes it possible for a function to have "private" variables.
function createBankAccount(initialBalance = 0) {
  let balance = initialBalance;

  function deposit(amount) {
    if (amount > 0) {
      balance += amount;
      return `Deposited: $${amount}`;
    } else {
      return "Deposit amount must be positive.";
    }
  }

  function withdraw(amount) {
    if (amount <= balance && amount > 0) {
      balance -= amount;
      return `Withdrew: $${amount}`;
    } else if (amount <= 0) {
      return "Withdrawal amount must be positive.";
    } else {
      return "Insufficient funds.";
    }
  }

  function checkBalance() {
    return `Current balance: $${balance}`;
  }

  return {
    deposit,
    withdraw,
    checkBalance,
  };
}

const myAccount = createBankAccount();

function handleAction(action) {
  const amountInput = document.getElementById("amount");
  const feedback = document.getElementById("feedback");
  const amount = parseFloat(amountInput.value);

  if (action === "deposit") {
    feedback.textContent = myAccount.deposit(amount);
  } else if (action === "withdraw") {
    feedback.textContent = myAccount.withdraw(amount);
  } else if (action === "checkBalance") {
    feedback.textContent = myAccount.checkBalance();
  }
  amountInput.value = "";
}
