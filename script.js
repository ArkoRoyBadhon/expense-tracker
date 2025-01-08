const amount = document.getElementById("amount");
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const balance = document.getElementById("balance");
const deposit = document.getElementById("deposit");
const withdraw = document.getElementById("withdraw");

depositBtn.addEventListener("click", () => {
  if (amount.value > 0) {
    balance.innerText = Number(balance.innerText) + Number(amount.value);
    deposit.innerText = Number(deposit.innerText) + Number(amount.value);
    if (amount.value > 0) {
      const transaction = document.createElement("div");
      transaction.classList.add("inner-t");
      transaction.innerHTML = `
      <div class="flex-row">
        <div class="flex-col">
          <h6 class="deposit">Deposit</h6>
          <small class="">${new Date().toLocaleString()}</small>
        </div>
        <h5 class="">$${amount.value}</h5>
      </div>
      `;
      const transactionHistory = document.getElementById("transaction");
      transactionHistory.appendChild(transaction);
    }
    amount.value = "";
  } else {
    window.alert("Please enter a valid amount");
  }
});

withdrawBtn.addEventListener("click", () => {
  if (amount.value > 0) {
    if (Number(amount.value) > Number(balance.innerText)) {
      window.alert("Insufficient Balance");
    } else {
      balance.innerText = Number(balance.innerText) - Number(amount.value);
      withdraw.innerText = Number(withdraw.innerText) + Number(amount.value);
      if (amount.value > 0) {
        const transaction = document.createElement("div");
        transaction.classList.add("inner-t");
        transaction.innerHTML = `
        <div class="flex-row">
          <div class="flex-col">
            <h6 class="withdraw">Withdraw</h6>
            <small class="">${new Date().toLocaleString()}</small>
          </div>
          <h5 class="">$${amount.value}</h5>
        </div>
        `;
        const transactionHistory = document.getElementById("transaction");
        transactionHistory.appendChild(transaction);
      }
      amount.value = "";
    }
  } else {
    window.alert("Please enter a valid amount");
  }
});
