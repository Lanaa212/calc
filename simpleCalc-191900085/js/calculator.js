function add() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").value = num1 + num2;
}

function subtract() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").value = num1 - num2;
}


function resetFields() { 
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").value = "";
}

