window.onload = () =>{
	document.querySelector('#calculate').onclick = calculateTip;
}

function calculateTip(){
	console.log("hello");
	
	let amount = document.querySelector('#amount').value;
	let service = document.querySelector('#percent').value;
	let person = document.querySelector('#persons').value;
	
	console.log('service');
	if(amount === '' || service === 'Select'){
		alert('Enter a valid amount to be paid and select service');
		return;
	}
	
	if(person === '1'){
		document.querySelector('#each').style.display = 'none';
	}else{
		document.querySelector('#each').style.display = 'block';
	}
	
	let total = (amount * service)/person;
	console.log(total);
	total = Math.round(total*100)/100;
	total = total.toFixed(2);
	console.log(total);
	
	document.querySelector('.tip').style.display = 'block';
	document.querySelector('#total').innerHTML = total;
	
	
}