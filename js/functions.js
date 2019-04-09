function formSubmit(e){
	e.preventDefault();

	let item_amount = document.getElementById("item-amount").value;
	let item_price = document.getElementById("item-price").value;
	let state_code = document.getElementById("state-code").value;
	
	let total = calculate(item_amount, item_price, state_code);
	document.getElementById("result").innerHTML = `Total : $${total}`;
}



function calculate(amount, price, state_code){
	let sub_total = amount * price;
	
	// find the discount_percent based on the sub_total.
	let discount_percent = 0;
	if(sub_total>=50000) discount_percent = 15;
	else if(sub_total>=10000) discount_percent = 10;
	else if(sub_total>=7000) discount_percent = 7;
	else if(sub_total>=5000) discount_percent = 5;
	else if(sub_total>=1000) discount_percent = 3;
	else discount_percent = 0;

	let discounted_total = sub_total * (1-discount_percent/100);

	// find the tax percentage based off of the state_code
	let tax_percent = 0;
	switch(state_code){
		case "UT":
			tax_percent = 6.85;
			break;
		case "NV":
			tax_percent = 8.00;
			break;
		case "TX":
			tax_percent = 6.25;
			break;
		case "AL":
			tax_percent = 4.00;
			break;
		case "CA":
			tax_percent = 8.25;
			break;
		default:
			tax_percent = 0;
	}

	// taxed total is based off of the discounted total multiplied by the 1 + tax percentage/100.
	let taxed_total = discounted_total * (1+tax_percent/100);
	return parseFloat(taxed_total.toFixed(3));
}

module.exports = { calculate };
