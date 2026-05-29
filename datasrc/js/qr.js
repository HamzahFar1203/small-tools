var user_input = document.querySelector("#userInput");
var submitBtn = document.querySelector("#submitBtn");
var output_field = document.querySelector("#output_field");

submitBtn.addEventListener("click", function () {

	if (user_input.value.trim() == "") {

		output_field.textContent = "Invalid";

		if (output_field.classList.contains("gradient-background")) {
			output_field.classList.remove("gradient-background");
		}

	} else {

		output_field.textContent = " "
		const qrcode = new QRCode(document.getElementById('output_field'), {
			text: user_input.value,
			width: 128,
			height: 128,
			colorDark : 'black',
			colorLight : 'white',
			correctLevel : QRCode.CorrectLevel.H
		});

		output_field.classList.add("gradient-background");

	}

});