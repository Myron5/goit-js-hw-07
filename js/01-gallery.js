import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
  images: document.querySelectorAll(".gallery__image"),
  items: document.querySelectorAll(".gallery__item"),
};

const onEscEventListener = (instance) => {
  const onPressEsc = (e) => {
    if (e.code == "Escape") {
      instance.close();
      document.removeEventListener("keydown", onPressEsc);
    }
  };
  document.addEventListener("keydown", onPressEsc);
};

refs.images.forEach((img, i) => {
  img.setAttribute("src", galleryItems[i].preview);
  img.setAttribute("alt", galleryItems[i].description);
  img.setAttribute("js-idx", i);
});

refs.gallery.addEventListener("click", (e) => {
  e.preventDefault();
  const idx = e.target.getAttribute("js-idx");
  const targetImg = galleryItems[idx];
  const markup = `<img src="${targetImg.original}" alt="${targetImg.description}" width="900">`;
  const instance = basicLightbox.create(markup, {
    onShow: onEscEventListener,
  });
  instance.show();
});
