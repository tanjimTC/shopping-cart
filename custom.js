updateText("plus", "value", "money", 1219);
updateText("minus", "value", "money", 1219);
updateText("coverPlus", "coverValue", "coverMoney", 59);
updateText("coverMinus", "coverValue", "coverMoney", 59);

function updateText(id, field, amount, moneyValue) {
  document.getElementById(id).addEventListener("click", () => {
    
    let number = document.getElementById(field).value;
    let parse = parseInt(number);
    if (id == "plus" || id == "coverPlus") {
      let display = parse + 1;
      document.getElementById(field).value = display;
      let moneyID = document.getElementById(amount).innerText;
      parseMoney = parseInt(moneyID);
      displayMoney = parseMoney + moneyValue;
      document.getElementById(amount).innerText = displayMoney;
      let subTotal=document.getElementById("subTotalAmount").innerText;
      parseTotal =parseInt(subTotal);
      document.getElementById("totalAmount").innerText =parseTotal+moneyValue;
      document.getElementById("subTotalAmount").innerText =parseTotal+moneyValue;
    } else {
      let display = parse - 1;
      if(display>=0){
      document.getElementById(field).value = display;
      let moneyID = document.getElementById(amount).innerText;
      parseMoney = parseInt(moneyID);
      displayMoney = parseMoney - moneyValue;
      document.getElementById(amount).innerText = displayMoney;
      let subTotal=document.getElementById("subTotalAmount").innerText;
      parseTotal =parseInt(subTotal);
      document.getElementById("totalAmount").innerText =parseTotal-moneyValue;
      document.getElementById("subTotalAmount").innerText =parseTotal-moneyValue;
      }
    }
  });
}