import {connect} from 'react-redux';
import HomePage from '_components/HomePage';

function mapStateToProps(state, containerProps) {
  return {
    images: state.images
  };
}

export default connect(mapStateToProps)(HomePage);