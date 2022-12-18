import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
  images: document.querySelectorAll(".gallery__image"),
  items: document.querySelectorAll(".gallery__item"),
};

// ----------------------- Функція, яка спрацьовує на нажимання Escape -------------------------
const onPressEsc = (e) => {
  if (e.code == "Escape") console.log("YES ESC");
  document.removeEventListener("keydown", onPressEsc);
};

// ----------------------- Заповнюєм галерею зображеннями -------------------------
refs.images.forEach((img, i) => {
  img.setAttribute("src", galleryItems[i].preview);
  img.setAttribute("alt", galleryItems[i].description);
});

// ----------------------- Додаємо загальну подію на всі зображення -------------------------
refs.gallery.addEventListener("click", (e) => {
  e.preventDefault();
  const targetImg = galleryItems.find(
    ({ description }) => description === e.target.getAttribute("alt")
  );
  const markup = ` <div class="modal"><img src="${targetImg.original}" alt="${targetImg.description}" width="900"> </div>`;
  basicLightbox
    .create(markup, {
      onClose: () => false,
    })
    .show();
  document.addEventListener("keydown", onPressEsc);
});
