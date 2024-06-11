let spinNumberOutput = document.querySelector(".spinNumberOutput");
// let regularPrice = document.querySelector(".regularPrice");
let quantityOutput = document.querySelector(".quantityOutput");
let plusButton = document.querySelector(".incrimentButton");
let minusButton = document.querySelector(".decrimentButton");

spinNumberOutput.value = 1;
// quantityOutput.innerHTML = regularPrice.innerHTML * spinNumberOutput.value;

plusButton.addEventListener("click", function () {
  spinNumberOutput.value++;
  // quantityOutput.innerHTML = regularPrice.innerHTML * spinNumberOutput.value;
});

minusButton.addEventListener("click", function () {
  if (spinNumberOutput.value > 1) {
    spinNumberOutput.value--;
    // quantityOutput.innerHTML = regularPrice.innerHTML * spinNumberOutput.value;
  }
});
