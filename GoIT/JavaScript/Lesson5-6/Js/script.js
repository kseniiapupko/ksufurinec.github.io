function div (divName) {
	var divName = document.createElement('div');
	document.body.appendChild(divName);
	return divName;
}

var divForTimeTable = div(divForTimeTable);
var divForStartReset = div(divForStartReset);

var timeTable = document.createElement('div');
divForTimeTable.appendChild(timeTable);
timeTable.innerHTML = '00:00:00:000';
timeTable.classList.add('col-md-2', 'col-md-offset-5', 'text-center');

var startButton = document.createElement('button');
divForStartReset.appendChild(startButton);
startButton.classList.add('btn', 'btn-danger', 'col-md-1', 'col-md-offset-5');
startButton.setAttribute('type', 'button');
startButton.innerHTML = 'Start';
startButton.addEventListener("click", startTimer);

var resetButton = document.createElement('button');
divForStartReset.appendChild(resetButton);
resetButton.classList.add('btn', 'btn-danger', 'col-md-1');
resetButton.setAttribute('type', 'button');
resetButton.innerHTML = 'Reset';
resetButton.addEventListener("click", resetTimer);

var zero = new Date(0, 0),
seconds = 0,
minutes = 0,
hours = 0,
timer,
time;

function countTime() {
	zero.setMilliseconds( zero.getMilliseconds() + 4);
	var milliseconds = zero.getMilliseconds();
	
		if ( milliseconds === 996) {
			++seconds;
		} 

		if (seconds >= 60) {
			seconds = 0;
			++minutes;
		} 

		if (minutes >= 60) {
			minutes = 0;
			++hours;
		} 

		if (seconds < 10) {
			secondsNum = '0' + seconds;
		} else {
			secondsNum = seconds;
		}

		if (minutes < 10) {
			minutesNum = '0' + minutes;
		} else {
			minutesNum = minutes;
		}

		if (hours < 10) {
			hoursNum = '0' + hours;
		} else {
			hoursNum = hours;
		}

	time = hoursNum + ':' + minutesNum + ':' + secondsNum + ':' + milliseconds;
	timeTable.innerHTML = time;
}

function startTimer(){
	startButton.classList.add('btn', 'btn-primary');
	startButton.classList.remove('btn-danger', 'btn-success');
	startButton.innerHTML = 'Pause';
	timer = setInterval(countTime, 4);
	startButton.removeEventListener("click", startTimer);
	startButton.addEventListener("click", pauseTimer);
}

function pauseTimer(){
	startButton.classList.add('btn-success');
	startButton.classList.remove('btn-primary');
	startButton.innerHTML = 'Continue';
	clearInterval(timer);
	timeTable.innerHTML = time;
	startButton.removeEventListener("click", pauseTimer);
	startButton.addEventListener("click", startTimer);
}

function resetTimer(){
	startButton.classList.remove('btn-primary', 'btn-success');
	startButton.classList.add('btn-danger');
	startButton.innerHTML = 'Start';
	timeTable.innerHTML = '00:00:00:000';
	clearInterval(timer);
	startButton.removeEventListener("click", pauseTimer);
	startButton.addEventListener("click", startTimer);
	var timestamp = document.querySelectorAll('.test');
	[].forEach.call(timestamp, function(el) {
	el.parentNode.removeChild(el);
	});
	zero = new Date(0, 0);
	seconds = 0;
	minutes = 0;
	hours = 0;
}

