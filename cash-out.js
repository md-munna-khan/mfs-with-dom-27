document.getElementById("btn-cash-out").addEventListener("click",function(event){
    event.preventDefault()
    const cashOut = document.getElementById("input-cash-out").value ;
    const outPin = document.getElementById("cash-out-pin").value;
    if( outPin === "1234"){
       const balance = document.getElementById("balance").innerText
       const outBalance = parseFloat(balance);
       const outCash = parseFloat(cashOut);
       const outMoney =   outBalance - outCash;
       console.log(outMoney)
       document.getElementById("balance").innerText = outMoney
    } else{
        alert("wrong pin ")
    }
})