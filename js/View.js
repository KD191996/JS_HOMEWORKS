export class AlbumView {
  constructor() {
    this.albumListElement = document.getElementById("albumList");
  }

  displayAlbums(albums, onAlbumClick) {
    this.albumListElement.innerHTML = "";
    albums.forEach((album) => {
      const albumElement = document.createElement("div");
      albumElement.className = "album";
      albumElement.textContent = album.title;
      albumElement.addEventListener("click", () => onAlbumClick(album.id));
      this.albumListElement.appendChild(albumElement);
    });
  }
}

export class PhotoView {
  constructor() {
    this.photoListElement = document.getElementById("photoList");
  }

  displayPhotos(photos) {
    this.photoListElement.innerHTML = "";
    photos.forEach((photo) => {
      const photoElement = document.createElement("div");
      photoElement.className = "photo";
      photoElement.innerHTML = `
                <img src="${photo.thumbnailUrl}" alt="${photo.title}">
                <p>${photo.title}</p>
            `;
      this.photoListElement.appendChild(photoElement);
    });
  }
}
