import {connect} from 'react-redux';
import {changeAlbum} from '_actions/gallery/gallery_actions';
import galleryThunks from '_thunks/gallery/gallery_thunks';
import {getSlideshowAlbum, getSlideshowAlbums, getSlideshow} from '_selectors/gallery_selectors';
import GalleryPage from '_components/GalleryPage/GalleryPage';

// Get apps state and pass it as props to UserList
// Whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
  return {
    slideshow: {
      album: getSlideshowAlbum(state)
    },
    albums: getSlideshowAlbums(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleAlbumChange(albumId) {
      dispatch(changeAlbum(albumId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage);