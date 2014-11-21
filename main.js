document.addEventListener('DOMContentLoaded', function() {


	
	document.querySelector('#sub').addEventListener('click', function () {
		var toConvert = parseFloat(document.querySelector('#inputform').value);
		var type = document.querySelector('#choice').value;

		switch(type) {
			case "value1":
				var conversion = parseInt((toConvert - 32) * 5 / 9) + "\xB0C";
				break;
			case "value2":
				var conversion = parseInt((toConvert * 9 / 5) + 32) + "\xB0F";
				break;
			case "value3":
				var conversion = (toConvert/0.62137).toFixed(2) + "km";
				break;
			case "value4":
				var conversion = (toConvert*0.62137).toFixed(2) + "miles";
				break;
		}

		document.querySelector('.converted').innerText = conversion;

	});

	document.querySelector("#reset").addEventListener('click', function () {
		var blank = "";
		document.querySelector('.converted').innerText = blank;
		document.querySelector('#inputform').value = blank;
	});

});