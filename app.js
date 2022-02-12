function updateCaseNumber(isAdd) {
  const caseInput = document.getElementById("case-number");
  const caseNumber = caseInput.value;
  if (isAdd == true) {
    caseInput.value = parseInt(caseNumber) + 1;
  } else {
    caseInput.value = parseInt(caseNumber) - 1;
  }
}
document.getElementById("case-plus").addEventListener("click", function () {
  updateCaseNumber(true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  //   const caseInput = document.getElementById("case-number");
  //   const caseNumber = caseInput.value;
  //   caseInput.value = parseInt(caseNumber) - 1;
  updateCaseNumber(false);
});
