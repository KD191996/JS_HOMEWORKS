import { AlbumController } from "./Controller.js";
import { PhotoController } from "./Controller.js";
document.addEventListener("DOMContentLoaded", () => {
  const albumController = new AlbumController();
  albumController.init();
});

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const albumId = urlParams.get("albumId");
  if (albumId) {
    const photoController = new PhotoController(albumId);
    photoController.init();
  }
});
