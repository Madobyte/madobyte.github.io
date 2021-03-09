import { createModal } from "./createModal.js";

export const showHideResume = () => {
  const showHideBtn = document.querySelector(".show-hide-btn");
  const content = document.createElement("embed");
  content.src = "./assets/Engr_Marc_Bambalan_Software_Developer.pdf";
  content.setAttribute(
    "pluginspage",
    "http://www.adobe.com/products/acrobat/readstep2.html"
  );

  showHideBtn.addEventListener("click", () => createModal(content));
};
