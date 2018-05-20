import axios from 'axios';
import * as galleryActions from '_actions/gallery/gallery_actions';
import { apiKeys } from '_constants/app_constants';

const fetchAlbumPhotos = albumId => {
  return dispatch => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKeys.flickr}&photoset_id=${albumId}&format=json&nojsoncallback=1`;
    dispatch(galleryActions.fetchAlbumPhotos(axios.get(url)));
  };
}
export default {
  fetchAlbumPhotos
};