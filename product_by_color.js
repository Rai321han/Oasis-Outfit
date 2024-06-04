const colorCircles = document.querySelectorAll(".color-circle");
colorCircles.forEach((color) => {
  color.addEventListener("click", () => {
    const product_id = color.getAttribute("data-code");
    const imageElement =
      color.closest(".section-card-item").firstElementChild.nextElementSibling
        .firstElementChild;
    const imageName = "./assets/images/" + product_id + ".jpeg";
    console.log(imageName);
    imageElement.src = imageName;
  });
});
