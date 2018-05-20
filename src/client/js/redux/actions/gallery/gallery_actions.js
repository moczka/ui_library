export function changeAlbum(albumId) {
  return {
    type: 'CHANGE_ALBUM',
    payload: albumId
  }
}

export function fetchAlbumPhotos(promise) {
  return {
    type: 'FETCH_ALBUM_IMAGES',
    payload: promise
  };
}