let user = {
  address: '',
  privateKey: '',
  balance: 1500
};

function createWallet() {
  const random = Math.floor(Math.random() * 1000000000);
  user.address = "SADC_" + random;
  user.privateKey = btoa("private" + random);
  document.getElementById("address").innerText = user.address;
  document.getElementById("balance").innerText = user.balance + " ZAR";
  alert("Wallet created!");
}

function sendTransaction() {
  let amount = prompt("Enter amount to send:");
  let tax = amount * 0.15;
  let net = amount - tax;
  user.balance -= amount;
  document.getElementById("balance").innerText = user.balance + " ZAR";
  alert(`Sent ${net} ZAR (Tax: ${tax} ZAR deducted)`);
}

function generateQR() {
  document.getElementById("qr-section").style.display = "block";
  QRCode.toCanvas(document.getElementById('qrcode'), user.address);
}