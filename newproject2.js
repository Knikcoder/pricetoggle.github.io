const toggleButton = document.getElementById("toggle-button");
const toggleText = document.querySelector(".toggle-text");
const prices = document.querySelectorAll("#price");

toggleButton.addEventListener("change", function () {
  if (toggleButton.checked) {
    prices.forEach((price) => {
      const currentPrice = parseFloat(price.textContent.slice(1));
      price.textContent = `$${(currentPrice * 12).toFixed(2)}`;
    });
    toggleText.textContent = "Yearly";
  } else {
    prices.forEach((price) => {
      const currentPrice = parseFloat(price.textContent.slice(1));
      price.textContent = `$${(currentPrice / 12).toFixed(2)}`;
    });
    toggleText.textContent = "Monthly";
  }
});