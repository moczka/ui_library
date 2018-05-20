import React from 'react';
import PropTypes from 'prop-types';
import Image from '_components/Image/Image';
import {Link} from 'react-router-dom';
import cx from '_utilities/classnames';
import './Card.scss';

const Card = props => {
  const {children, image, withoutBorder, target} = props;
  const WrapperElement = target ? Link : 'div'
  const attributes = target ? {to: target} : {};
  return (
    <WrapperElement className={cx("Card", {
      "Card--withoutBorder": withoutBorder
    })} {...attributes}>
      <div className="Card-image">
        {image}
      </div>
      <div className="Card-desc">
        {children}
        <div className="Card-iconLink">
          <span className="glyphicon glyphicon-arrow-right"></span>
        </div>
      </div>
    </WrapperElement>
  );
}

Card.propTypes = {
  withoutBorder: PropTypes.bool,
  target: PropTypes.string,
};

Card.defaultProps = {
  target: null,
  withoutBorder: false
};

export default Card;