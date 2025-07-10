//input field value function
function getInputValueById(id){
  return document.getElementById(id).value
}

//text value function
function getTextValueById(id){
  return parseFloat(document.getElementById(id).innerText)
}

//remove active class style

function showActive(id){

  document.getElementById('transaction-btn').classList.remove('active')
  document.getElementById('add-money-btn').classList.remove('active')
  document.getElementById('cash-out-btn').classList.remove('active')

  document.getElementById(id).classList.add('active')
}

function showForm(id){
  //and show the form
  document.getElementById('transaction-section').classList.add('hidden')
  document.getElementById('add-money-section').classList.add('hidden')
  document.getElementById('cash-out-section').classList.add('hidden')

  document.getElementById(id).classList.remove('hidden')
}