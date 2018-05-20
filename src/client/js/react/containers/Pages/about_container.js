import {connect} from 'react-redux';
import About from '_components/Pages/About';

function mapStateToProps(state, containerProps) {

  const about = state.about;

  return {
    title: about.company.name,
    description: about.company.background
  };
}

export default connect(mapStateToProps)(About);