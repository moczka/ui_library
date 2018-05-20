import {connect} from 'react-redux';
import PMPage from '_components/Pages/ProjectManagement';

function mapStateToProps(state, containerProps) {

  const {projectManagement} = state;

  return {
    title: projectManagement.title,
    description: projectManagement.description,
    videoSrc: projectManagement.video_src,
    benefits: projectManagement.benefits
  };
}

export default connect(mapStateToProps)(PMPage);