var urlInput = document.querySelector("#userInput");
var submitBtn = document.querySelector("#submitBtn");
var qrcodeDiv = document.querySelector("#qrcode");

submitBtn.addEventListener("click", function () {
  qrcodeDiv.textContent = " "
  const qrcode = new QRCode(document.getElementById('qrcode'), {
    text: urlInput.value,
    width: 128,
    height: 128,
    colorDark : 'black',
    colorLight : 'white',
    correctLevel : QRCode.CorrectLevel.H
  });

  qrcodeDiv.classList.add("gradient-background");
});