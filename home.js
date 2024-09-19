/**
 * 1= add event handler
 * 2:get money to be added to the account balance
 */



//step 1 = add the event handler to the add money button inside the form
document.getElementById("btn-add-money").addEventListener("click",function(event){
    // prevent page reload after form submit
event.preventDefault();
// step-2 =get money to be added to the account
 const addInputAmount =  document.getElementById("input-amount").value ;
 console.log(addInputAmount)
 // get the pin number provided
 const inputPin =  document.getElementById("input-pin").value ;
 console.log(inputPin)
// step 3= verify the pin
if(inputPin === "1234"){
    // console.log("adding money to your account");
    // step-4 get the current balance
const balance = document.getElementById("balance").innerText;
console.log(balance);
//step-5 : add money input with balance
const moneyInput = parseFloat(addInputAmount);
const balanceInput = parseFloat(balance);
const totalBalance = moneyInput+ balanceInput;
console.log(totalBalance)
// step- update the balance in the Dom
document.getElementById("balance").innerText = totalBalance;

} else{
    alert("failed to add money ! please try again")
}

})