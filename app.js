function updateCaseNumber(quantity, isIncreasing, priceId, price) {
  const input = document.getElementById(quantity);
  var totalNumber = input.value;
  if (isIncreasing == true) {
    totalNumber = parseInt(totalNumber) + 1;
  } else if (totalNumber > 0) {
    totalNumber = parseInt(totalNumber) - 1;
  }
  input.value = totalNumber;
  //   this is for showing price
  const addPrice = document.getElementById(priceId);
  addPrice.innerText = totalNumber * price;
}
document.getElementById("case-plus").addEventListener("click", function () {
  updateCaseNumber("case-number", true, "case-total", 59);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateCaseNumber("case-number", false, "case-total", 59);
});

// this is for phone quantity
document.getElementById("phone-plus").addEventListener("click", function () {
  updateCaseNumber("phone-number", true, "phone-total", 1219);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateCaseNumber("phone-number", false, "phone-total", 1219);
});
