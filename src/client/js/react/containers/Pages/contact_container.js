import {connect} from 'react-redux';
import ContactPage from '_components/Pages/Contact';

function mapStateToProps(state, containerProps) {

  const about = state.about;

  return {
    title: 'Contact Us!',
    description: 'Feel free to send us a message with any questions or concerns! You can even request a quote.'
  };
}

export default connect(mapStateToProps)(ContactPage);