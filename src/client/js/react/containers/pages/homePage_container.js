import {connect} from 'react-redux';
import HomePage from '_components/HomePage';

function mapStateToProps(state, containerProps) {

  const about = state.images;

  return {
    images
  };
}

export default connect(mapStateToProps)(HomePage);