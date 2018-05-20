import { createSelector } from 'reselect';

export const getAlbums = state => state.gallery.albums;
export const getShowcase = state => state.gallery.showcase;
export const getSlideshow = state => state.gallery.slideshow;

export const getShowcaseAlbum = createSelector(
  [getAlbums, getShowcase], 
  (albums, showcase) => {
    return albums.find(album => album.id === showcase.albumId);
});

export const getSlideshowAlbum = createSelector(
  [getAlbums, getSlideshow], 
  (albums, slideshow) => {
    return albums.find(album => {
      return album.id === slideshow.activeAlbumId;
    });
});

export const getSlideshowAlbums = createSelector(
  [getAlbums, getSlideshow], 
  (albums, slideshow) => {
    return albums.filter(album => {
      return slideshow.albumsToShow.some(allowedAlbum => album.id === allowedAlbum);
    });
});