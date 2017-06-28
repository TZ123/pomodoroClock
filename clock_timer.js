const secondHand = document.querySelector('.second-hand');
	const minHand = document.querySelector('.min-hand');
	const hourHand = document.querySelector('.hour-hand');
	
	function setDate() {
		const now = new Date();
		
		const seconds = now.getSeconds();
		const secondsDegrees = ((seconds / 60) * 360) + 90;
		secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
		
		const minutes = now.getMinutes();
		const minutesDegrees = ((minutes / 60) * 360) + 90;
		minHand.style.transform = `rotate(${minutesDegrees}deg)`;
		
		const hour = now.getHours();
		const hoursDegrees = ((hour / 12) * 360) + 90;
		hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

		console.log(seconds);
	}
	
	setInterval(setDate, 1000);
	
	function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
};

	
	
		var twentyMinutes = 60 * 20,
        display = document.querySelector('#time');

    	display.onclick = function(){
			startTimer(twentyMinutes, display);
		};
	