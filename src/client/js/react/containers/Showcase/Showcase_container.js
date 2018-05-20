import {connect} from 'react-redux';
import {getShowcase, getShowcaseAlbum} from '_selectors/gallery_selectors';
import Slideshow from '_components/Slideshow/Slideshow';

function mapStateToProps(state, containerProps) {
  return {
    photos: getShowcaseAlbum(state).photos,
    ...containerProps
  };
}

export default connect(mapStateToProps)(Slideshow);