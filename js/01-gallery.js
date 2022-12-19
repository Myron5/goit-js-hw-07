import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
  images: document.querySelectorAll(".gallery__image"),
  items: document.querySelectorAll(".gallery__item"),
};

// --- Заповнюєм галерею зображеннями ---
refs.images.forEach((img, i) => {
  img.setAttribute("src", galleryItems[i].preview);
  img.setAttribute("alt", galleryItems[i].description);
});

// --- Додаємо загальну подію на всі зображення ---
refs.gallery.addEventListener("click", (e) => {
  e.preventDefault();

  // --- Шукаємо потрібне фото в списку ---
  const targetImg = galleryItems.find(
    ({ description }) => description === e.target.getAttribute("alt")
  );

  // --- Створюєм розмітку майбутнього тегу -----
  const markup = `<img src="${targetImg.original}" alt="${targetImg.description}" width="900">`;

  // --- Створюєм екземпляр майбутнього тегу ---
  const instance = basicLightbox.create(markup, {
    onShow: (instance) => {
      // --- Функція, яка закриває модалку на нажимання Escape ---
      const onPressEsc = (e) => {
        if (e.code == "Escape") {
          instance.close();
          document.removeEventListener("keydown", onPressEsc);
        }
      };

      // --- Навішування функції на нажимання клавіатури ---
      document.addEventListener("keydown", onPressEsc);
    },
  });

  // --- Фінальний етап - показуєм модальне вікно ---
  instance.show();
});
