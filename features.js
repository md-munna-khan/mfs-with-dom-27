// show cash out btn
document.getElementById("btn-show-cash-out").addEventListener("click",function(){
    // show cash out button clicked
document.getElementById("cash-out-form").classList.remove("hidden");
// hide the add money form
document.getElementById("add-money-form").classList.add("hidden");
})
// show cash add btn
document.getElementById("btn-show-add-money").addEventListener("click",function(){
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("add-money-form").classList.remove("hidden")
})