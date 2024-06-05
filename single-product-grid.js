const gridImages = document.querySelectorAll(".grid-view-image");

gridImages.forEach((image) => {
  image.addEventListener("click", () => {
    const myParent = image.parentElement;
    const biggerImageHolder = image.closest(
      ".single-product-grid-view"
    ).nextElementSibling;
    const biggerImage = biggerImageHolder.firstElementChild;

    myParent.removeChild(myParent.firstElementChild);
    myParent.appendChild(biggerImage);

    //   biggerImageHolder.removeChild(biggerImageHolder.firstElementChild);
    biggerImageHolder.appendChild(image);
  });
});
