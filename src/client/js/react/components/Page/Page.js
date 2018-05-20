import React from 'react';
import Navbar from '_containers/Navbar/Navbar_container';
import Footer from '_containers/Footer/Footer_container';
import PropTypes from 'prop-types';
import cx from '_utilities/classnames';
import './Page.scss';

export const Page = ({children}) => (
  <div className="Page">
    <Navbar />
    <main className="Page-content">
      {children}
    </main>
    <Footer />
  </div>
);

export const PageSection = (props) => {
  const {fluid} = props;
  return (
    <section className={cx("Page-section", {
      'Page-section--fluid': fluid
    })}>
      {props.children}
    </section>
  );
}

export const SectionTitle = props => {
  const {title, children, centerText, background, icon, titleAlign, separated} = props;
  return (
    <div className={cx("Page-sectionTitle", {
      'Page-sectionTitle--separated': separated,
      [`Page-sectionTitle--${titleAlign}`]: !!titleAlign
    })}>
      <h2 className="Page-sectionTitle-title">{title}</h2>
      {icon && (
        <span className={`${icon} Page-sectionTitle-iconWrapper`}></span>
      )}
    </div>
  );
};

SectionTitle.propTypes = {
  titleAlign: PropTypes.string,
  separated: PropTypes.bool
};

SectionTitle.defaultProps = {
  titleAlign: 'left',
  separated: false
};

export const SectionCard = props => {
  const {title, children, textAlign, background, icon, titleAlign, separated} = props;
  return (
    <PageSection>
      <div className={cx("Page-sectionCard-content", {
        'Page-sectionCard-content--overlay': !!background,
        [`Page-sectionCard-content--${textAlign}`]: !!textAlign
      })}>
        <SectionTitle title={title} icon={icon} separated titleAlign={titleAlign} />
        {children}
      </div>
    </PageSection>
  );
}

SectionCard.propTypes = {
  titleAlign: PropTypes.string,
  separated: PropTypes.bool
};

SectionCard.defaultProps = {
  titleAlign: 'left',
  separated: false
};

export default Page;