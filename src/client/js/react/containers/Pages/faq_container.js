import {connect} from 'react-redux';
import FaqPage from '_components/Pages/Faq';

function mapStateToProps(state, containerProps) {

  const faqPage = state.faq;

  return {
    title: faqPage.title,
    description: faqPage.description,
    faqs: faqPage.faqs
  };
}

export default connect(mapStateToProps)(FaqPage);