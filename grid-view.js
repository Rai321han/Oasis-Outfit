const viewButton = document.querySelectorAll(".grid-icon");

viewButton.forEach((button) => {
  button.addEventListener("click", () => {
    const singleViewImage = button.nextElementSibling;
    const colorBar = singleViewImage.nextElementSibling;
    const grid = colorBar.nextElementSibling;

    //   COLLECTING THE PRODUCT CODES

    if (!singleViewImage.classList.contains("hidden")) {
      if (grid.hasChildNodes()) {
        singleViewImage.classList.add("hidden");
        colorBar.classList.add("hidden");
        grid.classList.remove("hidden");
        grid.classList.add("grid-view");
        return;
      }
      const productCodesElement = colorBar.children;
      const noOfChild = colorBar.childElementCount;
      const productCodes = [];

      for (let i = 0; i < noOfChild; i++)
        productCodes.push(productCodesElement[i].getAttribute("data-code"));

      //   HIDDING SINGLEVIEW SECTION
      singleViewImage.classList.add("hidden");
      colorBar.classList.add("hidden");
      grid.classList.remove("hidden");

      //   MAKING THE GRID VIEW

      // Loop through the image names and create the required structure
      productCodes.forEach((imageName) => {
        // Create the outer div with class 'first'
        const Div = document.createElement("div");

        // Create the img element with the required attributes
        const img = document.createElement("img");
        img.className = "grid-view-image";
        img.src = `assets/images/${imageName}.jpeg`;
        img.alt = "";

        // Append the img to the outer div
        Div.appendChild(img);

        // Append the outer div to the parent 'Grid' element
        grid.appendChild(Div);
      });

      grid.classList.add("grid-view");

      grid.firstElementChild.classList.add("first");

      const gridImages = grid.querySelectorAll(".grid-view-image");

      gridImages.forEach((image) => {
        image.addEventListener("click", () => {
          const myParent = image.parentElement;
          const biggerImageHolder =
            image.closest(".grid-view").firstElementChild;
          const biggerImage = biggerImageHolder.firstElementChild;

          myParent.removeChild(myParent.firstElementChild);
          myParent.appendChild(biggerImage);

          //   biggerImageHolder.removeChild(biggerImageHolder.firstElementChild);
          biggerImageHolder.appendChild(image);
        });
      });
    } else {
      singleViewImage.classList.remove("hidden");
      colorBar.classList.remove("hidden");
      grid.classList.remove("grid-view");
      grid.classList.add("hidden");
    }
  });
});
