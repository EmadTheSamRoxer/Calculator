function formSubmit(e){
	e.preventDefault();
	
	let item_amount = document.getElementById("item-amount").value;
	let item_price = document.getElementById("item-price").value;
	let state_code = document.getElementById("state-code").value;
	
	let total = calculate(item_amount, item_price, state_code);
	document.getElementById("result").innerHTML = `Total : $${total}`;
}



function calculate(amount, price, state_code){
	return 0;
}

module.exports = { calculate };
