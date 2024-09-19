document.getElementById("btn-add-money").addEventListener("click",function(event){
event.preventDefault();
const addMoney = document.getElementById("input-amount").value;

const inputPin = document.getElementById("input-pin").value;



if(inputPin ==="1234"){

    const balance = document.getElementById("balance").innerText;
console.log(balance)
const amount = parseFloat(addMoney)
const balanceMain = parseFloat(balance)
 const totalBalance = amount + balanceMain;
 console.log(totalBalance)
  document.getElementById("balance").innerText = totalBalance
} else{
    alert("wrong pin ")
}


})
