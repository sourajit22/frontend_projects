
function showTime(){
	
	let date = new Date();
	let hours = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	let session = 'AM';
	if(hours === 0){
		hours = 12;
	}
	
	if(hours > 12){
		hours = hours - 12;
		session ='PM';
	}
	
	hours = (hours < 10) ? '0' + hours : hours;
	min = (min < 10) ? '0' + min : min;
	sec = (sec < 10) ? '0' + sec : sec;
	
	let time = hours + ':' + min + ':' + sec + ' ' + session;
	
	document.querySelector('#myTime').innerText = time;
	
	setTimeout(showTime, 1000);
	
	
}

showTime();