function updateProductNumber(quantity, isIncreasing, priceId, price) {
  const productInput = document.getElementById(quantity);
  var productNumber = productInput.value;
  if (isIncreasing == true) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  //   this is for showing price
  const addPrice = document.getElementById(priceId);
  addPrice.innerText = productNumber * price;
  calculateTotal();
}

//   this is for showing quantity and price
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case-number", true, "case-total", 59);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case-number", false, "case-total", 59);
});

// this is for phone quantity and price
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone-number", true, "phone-total", 1219);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone-number", false, "phone-total", 1219);
});

function getInputValue(product) {
  const productInput = document.getElementById(product + "-number");
  const productNumber = parseInt(productInput.value);
  return productNumber;
}
function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  //   tax calculation
  const tax = subTotal / 10;
  //total price
  const totalPrice = subTotal + tax;
  //   update on the html
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("total-price").innerText = totalPrice;
}
