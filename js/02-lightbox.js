import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
  images: document.querySelectorAll(".gallery__image"),
  links: document.querySelectorAll(".gallery__link"),
};

refs.images.forEach((img, i) => {
  img.setAttribute("src", galleryItems[i].preview);
  img.setAttribute("js-idx", i);
  img.setAttribute("alt", galleryItems[i].description);
  img.parentNode.setAttribute("href", galleryItems[i].original);
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

lightbox.on("show.simplelightbox", (e) => e.preventDefault());

lightbox.on("error.simplelightbox", (e) => console.log(e));
