//option functions
document.getElementById("add-money-btn").addEventListener("click", function () {
  showActive("add-money-btn");
  showForm("add-money-section");
});
document.getElementById("cash-out-btn").addEventListener("click", function () {
  showActive("cash-out-btn");
  showForm("cash-out-section");
});
document
  .getElementById("transaction-btn")
  .addEventListener("click", function () {
    showActive("transaction-btn");
    showForm("transaction-section");
  });

//add money
document.getElementById("add-money").addEventListener("click", function () {
  const amount = getInputValueById("add-money-input");

  if (!/^\d+(\.\d{1,2})?$/.test(amount)) {
    alert("wrong amount");
    return;
  }

  const amountNum = parseFloat(amount);
  const mainBalance = getTextValueById("main-balance");

  if (amountNum <= 0) {
    alert("check the amount or balance");
    return;
  }

  const total = amountNum + mainBalance;
  document.getElementById("main-balance").innerText = total;

  //show modal
  const modalContent = document.getElementById("modal-content");
  const closeBtn = document.getElementById("close-modal");
  const getModal = document.getElementById("modal");
  //open the modal
  getModal.classList.remove("hidden");
  getModal.classList.add("flex");

  // close modal
  closeBtn.addEventListener("click", function () {
    getModal.classList.remove("flex");
    getModal.classList.add("hidden");
  });

  // const p = document.createElement('p')
  // p.innerText = `${total}`

  // document.getElementById('transaction-section').appendChild(p)

  //transaction history
  const history = document.createElement("div");
  history.innerHTML = `
    <div class="px-4 py-2 rounded-xl border border-gray-300 my-1 bg-gray-50">
      <h5 class="font-semibold text-lg text-gray-700">Add Money</h5>
      <p class="text-gray-500 text-sm">Money <span class="font-semibold">${amountNum}</span> has been added total <span class="font-semibold">${total}</span></p>
    </div>
  `;
  document.getElementById("transaction-list").prepend(history);

  //clear the inputfield
  document.getElementById("add-money-input").value = "";
});

//cash out
document.getElementById("cash-out").addEventListener("click", function () {
  const amount = getInputValueById("cash-out-input");

  if (!/^\d+(\.\d{1,2})?$/.test(amount)) {
    alert("wrong amount");
    return;
  }

  const mainBalance = getTextValueById("main-balance");
  const amountNum = parseFloat(amount);

  if (mainBalance <= 0 || amountNum > mainBalance) {
    alert("amount should be (+) or not enough balance");
    return;
  }

  const remaining = mainBalance - amountNum;
  document.getElementById("main-balance").innerText = remaining;

  //transaction history
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="px-4 py-2 rounded-xl border border-gray-300 my-1 bg-gray-50">
      <h5 class="font-semibold text-lg text-gray-700">Cash Out</h5>
      <p class="text-gray-500 text-sm">Money <span class="font-semibold">${amountNum}</span> has been withdrawn remaining <span class="font-semibold">${remaining}</span></p>
    </div>
  `;
  document.getElementById("transaction-list").prepend(div);

  //show modal
  const modalContent = document.getElementById("modal-content");
  const closeBtn = document.getElementById("close-modal");
  const getModal = document.getElementById("modal");
  //open the modal
  getModal.classList.remove("hidden");
  getModal.classList.add("flex");

  // close modal
  closeBtn.addEventListener("click", function () {
    getModal.classList.remove("flex");
    getModal.classList.add("hidden");
  });
});
