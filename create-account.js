function createAccount(pin, amount = 0) {
  let balance = amount;
  let PIN = pin;
  function checkPin(p) {
    if (PIN !== p) return "Invalid PIN.";
  }

  return {
    checkBalance: function (p) {
      if (PIN !== p) return "Invalid PIN.";
      return `$${balance}`;
    },
    deposit: function (p, amt) {
      if (PIN !== p) return "Invalid PIN.";
      balance += amt;
      return `Succesfully deposited $${amt}. Current balance: $${balance}.`;
    },
    withdraw: function (p, amt) {
      if (PIN !== p) {
        return "Invalid PIN.";
      } else if (amt > balance) {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      } else {
        balance -= amt;
        return `Succesfully withdrew $${amt}. Current balance: $${balance}.`;
      }
    },
    changePin: function (p, newPin) {
      if (PIN !== p) return "Invalid PIN.";
      PIN = newPin;
      return "PIN successfully changed!";
    },
  };
}

// let account = createAccount("1234", 100);
// console.log(account.checkBalance("oops"));
// console.log(account.checkBalance("1234"));
// console.log(account.deposit("1234", 250));
// console.log(account.withdraw("1234", 300));
// console.log(account.withdraw("1234", 10));
// console.log(account.changePin("1234", "5678"));

module.exports = { createAccount };
