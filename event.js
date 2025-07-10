document.getElementById('cash-out').addEventListener('click', function(){
  const amount = getInputValueById('cash-out-input')

  if(!/^\d+(\.\d{1,2})?$/.test(amount)){
    alert('wrong amount')
    return
  }

  const mainBalance = getTextValueById('main-balance') 

  if(mainBalance <= 0 || amount > mainBalance){
    alert('amount should be (+) or not enough balance')
    return
  }

  const remaining = mainBalance - amount
  document.getElementById('main-balance').innerText = remaining.toFixed(2)
})


document.getElementById('add-money-btn').addEventListener('click', function(){
  showActive('add-money-btn')
  showForm('add-money-section')
})
document.getElementById('cash-out-btn').addEventListener('click', function(){
  showActive('cash-out-btn')
  showForm('cash-out-section')
})
document.getElementById('transaction-btn').addEventListener('click', function(){
  showActive('transaction-btn')
  showForm('transaction-section')
})