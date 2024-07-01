import { AlbumModel, PhotoModel } from "./Model.js";
import { AlbumView, PhotoView } from "./View.js";

export class AlbumController {
  albumModel = null;

  albumView = null;
  constructor() {
    this.albumModel = new AlbumModel();
    this.albumView = new AlbumView();
  }

  async init() {
    try {
      const albums = await this.albumModel.fetchAlbums();
      this.albumView.displayAlbums(albums, this.handleAlbumClick.bind(this));
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  }

  handleAlbumClick(albumId) {
    window.location.href = `album.html?albumId=${albumId}`;
  }
}

export class PhotoController {
  albumId = null;
  photoModel = null;
  photoView = null;
  constructor(albumId) {
    this.albumId = albumId;
    this.photoModel = new PhotoModel();
    this.photoView = new PhotoView();
  }

  async init() {
    try {
      const photos = await this.photoModel.fetchPhotos(this.albumId);
      this.photoView.displayPhotos(photos);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  }
}
