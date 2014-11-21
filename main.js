document.addEventListener('DOMContentLoaded', function() {


	
	document.querySelector('#sub').addEventListener('click', function () {


		var toConvert = document.querySelector('#inputform').value;
		toConvert = isNaN(toConvert) ? null : parseInt(toConvert)

		if (toConvert) { 
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

		} else {
			document.querySelector('.converted').innerText = "Please Enter a Number!";
		}

	});

	document.querySelector("#reset").addEventListener('click', function () {

		document.querySelector('.converted').innerText = "";
		document.querySelector('#inputform').value = "";
	});

});