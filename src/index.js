import ('./main.scss')
import { drawGalleryItem } from "./item";
import items from "./items";

const galleryRootElement = document.querySelector(".gallery-items");
console.log(galleryRootElement);

items.map(item => galleryRootElement.appendChild(drawGalleryItem(item)));