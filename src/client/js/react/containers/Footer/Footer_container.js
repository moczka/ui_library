import {connect} from 'react-redux';
import Footer from '_components/Footer/Footer';

const currentYear = (new Date()).getUTCFullYear();

const allowedPages = ['FAQ', 'Financing', 'Gallery', 'Project Management'];

function mapStateToProps(state, containerProps) {

  // Filter only the pages we want.
  const pages = state.pages.filter(page => {
    return allowedPages.some(allowedPage => {
      return allowedPage === page.name;
    });
  })

  return {
    ownerName: state.about.owner.name,
    phoneNumber: state.contact.phoneNumber,
    mediaAccounts: state.mediaAccounts,
    email: state.contact.email,
    licenses: state.contact.licenses,
    businessHours: state.contact.businessHours,
    companyMission: state.about.company.background,
    pages,
    currentYear
  };
}

export default connect(mapStateToProps)(Footer);